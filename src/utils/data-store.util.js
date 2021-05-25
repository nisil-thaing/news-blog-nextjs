export const DEFAULT_PAGING_INFO = {
  totalItems: 0,
  itemsPerPage: 0,
  currentPage: 1,
  totalPages: 0
};

export const DEFAULT_SEARCHING_PARAMS = {
  keyword: ''
};

export const DEFAULT_DATA_INITIAL_STATE = {
  isFetching: false,
  data: null,
  error: null
};

export const DEFAULT_DATA_WITH_PAGINATION_INITIAL_STATE = {
  ...DEFAULT_DATA_INITIAL_STATE,
  pagingInfo: DEFAULT_PAGING_INFO,
  searchingParams: DEFAULT_SEARCHING_PARAMS
};

export function fetchPagingDataSuccessReducer (state, action) {
  const { data: newData, pagingInfo } = action.payload;
  let data = [ ...newData ];

  if (pagingInfo.currentPage > DEFAULT_PAGING_INFO.currentPage) {
    data = [ ...state.data, ...newData ];
  }

  return {
    ...state,
    isFetching: false,
    data,
    pagingInfo
  };
}
