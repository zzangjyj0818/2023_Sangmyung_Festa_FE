// pages/Study/index.tsx
import React from "react"
import React, { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import axios from "axios"
import {
  FilterTags,
  PageContainer,
  TagButton,
  StudyComponent,
  StudyWrapper,
  GroupButton,
  StudySerach,
} from "./StudyCSS"
import { useRouter } from "next/router"
import fetchStudyGroups from "../../src/components/units/study/fetchStudyGroups"
import { boardIdState } from "../../src/components/commons/recoilState"
import { useRecoilValue } from "recoil"

const door = () => {
  const [selectedTags, setSelectedTags] = useState([])
  const [renderStudy, setRenderStudy] = useState([])
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedItems, setExpandedItems] = useState([])

  const [joinedGroups, setJoinedGroups] = useState({})

  const [groupCounts, setGroupCounts] = useState({})
  const [boardData, setBoardData] = useState([])
  const [studyData, setStudyData] = useState([])

  const boardId = useRecoilValue(boardIdState)

  const PASSWORD = "Solver_StudyCount"

  const router = useRouter()

  const [hasMore, setHasMore] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  const TAGS_CACHE_KEY = "studyTags"

  useEffect(() => {
    localStorage.setItem(TAGS_CACHE_KEY, JSON.stringify(selectedTags))
    fetchData(1)
  }, [selectedTags, searchQuery])

  useEffect(() => {
    const updateGroupCounts = async () => {
      try {
        const newBoardData = await Promise.all(
          renderStudy.map(async () => await fetchBoard(studyGroup.board))
        )

        const newJoinedGroups = renderStudy.reduce((acc, studyGroup) => {
          const boardDataItem = newBoardData.find(
            (boardItem) => boardItem._id === studyGroup.board
          )

          const [currentCount, maxCount] = boardDataItem.title
            .split("/")
            .map((s) => parseInt(s))

          acc[studyGroup.board] = {
            title: currentCount,
            writer: maxCount,
          }
          return acc
        }, {})

        setGroupCounts(newJoinedGroups)
      } catch (error) {
        console.error("스터디 조회 오류: ", error)
      }
    }

    updateGroupCounts()
  }, [renderStudy, boardData])

  const onSearch = (query) => {
    setSearchQuery(query)
    setPage(1)
    setRenderStudy([])
  }

  // StudyComponent 컴포넌트 클릭 시 확장 상태를 토글하는 함수
  const toggleExpansion = (itemId) => {
    setExpandedItems((prevExpanded) =>
      prevExpanded.includes(itemId)
        ? prevExpanded.filter((id) => id !== itemId)
        : [...prevExpanded, itemId]
    )
  }

  const fetchData = async (currentPage) => {
    try {
      const studyGroups = await fetchStudyGroups(currentPage, searchQuery)

      const newBoardData = await Promise.all(
        studyGroups.map(async () => await fetchBoard(boardId))
      )

      if (currentPage === 1) {
        setRenderStudy(studyGroups)
        setBoardData(newBoardData) // 게시판 정보 설정
      } else {
        setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups])
        setBoardData((prevBoardData) => [...prevBoardData, ...newBoardData]) // 기존 게시판 정보에 추가
      }

      const newJoinedGroups = studyGroups.reduce((acc) => {
        const boardDataItem = newBoardData.find(
          (boardItem) => boardItem.boardId === boardId
        )

        const [currentCount, maxCount] = boardDataItem.title
          .split("/")
          .map((s) => parseInt(s))

        acc[boardId] = {
          title: currentCount,
          writer: maxCount,
        }
        return acc
      }, {})

      setGroupCounts(newJoinedGroups)
    } catch (error) {
      console.error("Error fetching study groups:", error)
    }
  }

  const deleteStudyGroup = async (useditemId) => {
    try {
      const response = await axios.post(
        "http://backend-practice.codebootcamp.co.kr/graphql",
        {
          query: `
              mutation {
                deleteUseditem(useditemId: "${useditemId}")
              }
            `,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )

      if (response.data.data.deleteUseditem === useditemId) {
        setRenderStudy((prevQuestions) =>
          prevQuestions.filter((q) => q._id !== useditemId)
        )
        alert("게시글이 성공적으로 삭제되었습니다.")
      }
    } catch {
      alert("게시글 작성자만 삭제할 수 있습니다.")
    }
  }

  const uniqueTags = Array.from(new Set(renderStudy.flatMap((q) => q.tags)))

  const onClickTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag))
    } else if (selectedTags.length < 3) {
      setSelectedTags((prevTags) => [...prevTags, tag])
    } else {
      setSelectedTags((prevTags) => [tag, ...prevTags.slice(0, 2)])
    }

    setPage(1)
    setRenderStudy([])
  }

  const filteredStudyGroups =
    selectedTags.length > 0
      ? renderStudy.filter(
          (group) => selectedTags.some((tag) => group.tags?.includes(tag)) // .some을 통해 or 검색을 함
        )
      : renderStudy

  const loadMoreStudy = async () => {
    if (!hasMore || loadingMore) return

    try {
      setLoadingMore(true)
      const nextPage = page + 1
      const studyGroups = await fetchStudyGroups(nextPage)

      if (studyGroups.length > 0) {
        setRenderStudy((prevStudy) => [...prevStudy, ...studyGroups])
        setPage(nextPage)
        setHasMore(true)
      } else {
        setHasMore(false)
      }
    } catch (error) {
      console.error("Error fetching more study groups:", error)
    } finally {
      setLoadingMore(false)
    }
  }

  const toggleJoined = async (useditemId) => {
    try {
      if (joinedGroups.hasOwnProperty(useditemId)) {
        delete joinedGroups[useditemId]
        setJoinedGroups({ ...joinedGroups })
      } else {
        setJoinedGroups({ ...joinedGroups, [useditemId]: true })
      }
    } catch (error) {
      console.error("스터디 참가 에러 발생:", error)
      alert("스터디 참가 중 오류가 발생했습니다. 다시 시도해주세요.")
    }
  }

  const fetchBoard = async (boardId) => {
    try {
      const response = await axios.post(
        "http://backend-practice.codebootcamp.co.kr/graphql",
        {
          query: `
            query {
              fetchBoard(
                boardId: ${boardId}
                ){
                  _id
                  writer
                  title
                  contents
                }
            }
          `,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      console.log(response.data.data.fetchBoard)
      const result = response.data.data.fetchBoard
      return result
    } catch (error) {
      console.error("Error fetching board:", error)
    }
  }

  return (
    <PageContainer>
      <StudyWrapper>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <GroupButton
            onClick={() => {
              router.push("/Study/CreateGroup")
            }}
            style={{ margin: "10px" }}
          >
            스터디 그룹 등록하기
          </GroupButton>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <StudySerach
            placeholder="제목이나 태그 검색"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <FilterTags>
          {uniqueTags && uniqueTags.length > 0 && (
            <FilterTags>
              {uniqueTags.map((tag) => (
                <TagButton
                  key={tag}
                  active={selectedTags.includes(tag)}
                  onClick={() => onClickTag(tag)}
                >
                  #{tag}
                </TagButton>
              ))}
            </FilterTags>
          )}
        </FilterTags>

        <InfiniteScroll
          pageStart={0}
          loadMore={loadMoreStudy}
          hasMore={hasMore && !loadingMore}
          useWindow={false}
          loader={<div key={0}>Loading...</div>}
        >
          {filteredStudyGroups.map((studyGroup) => (
            <StudyComponent
              key={studyGroup._id}
              active={expandedItems.includes(studyGroup._id)}
              onClick={() => toggleExpansion(studyGroup._id)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div>
                <h2>{studyGroup.remarks}</h2>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    {studyGroup.tags
                      ? studyGroup.tags.slice(0, 3).map((tag) =>
                          tag ? (
                            <TagButton
                              key={tag}
                              active={selectedTags.includes(tag)}
                              onClick={() => onClickTag(tag)}
                              style={{ margin: "2px" }}
                            >
                              #{tag}
                            </TagButton>
                          ) : null
                        )
                      : null}
                  </div>

                  <p>스터디 회장: {studyGroup.name}</p>
                </div>
              </div>
              {expandedItems.includes(studyGroup._id) && (
                <div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: studyGroup.contents,
                    }}
                  />
                  <button onClick={() => toggleJoined(studyGroup.board)}>
                    {groupCounts[studyGroup.board]?.title >=
                    groupCounts[studyGroup.board]?.writer
                      ? "스터디 퇴장"
                      : "스터디 참가"}
                  </button>

                  <span style={{ marginLeft: "10px" }}>
                    {/* 여기서 fetchBoard 함수를 호출하여 필요한 정보를 렌더링합니다. */}
                    스터디 참가: {groupCounts[studyGroup.board]?.title}/
                    {groupCounts[studyGroup.board]?.writer}
                  </span>

                  <div style={{ paddingLeft: "91%" }}>
                    <button onClick={() => deleteStudyGroup(studyGroup._id)}>
                      게시글 삭제
                    </button>
                  </div>
                </div>
              )}
            </StudyComponent>
          ))}
        </InfiniteScroll>
      </StudyWrapper>
    </PageContainer>
  )
}

export default door
