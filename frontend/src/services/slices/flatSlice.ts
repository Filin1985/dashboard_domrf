import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getFlatDataApi } from '../../api'

export interface IFlatData {
  date: string
  all_meters: number
  open_meters: number
  pending_meters: number
  close_meters: number
  all_percent: number
  open_percent: number
}

interface IFlatSlice {
  flatData: IFlatData[]
  flatDataByYear: IFlatData[]
  getFlatsRequest: boolean
  getFlatsSuccess: boolean
  getFlatsFailed: boolean
}

const initialState: IFlatSlice = {
  flatData: [],
  flatDataByYear: [],
  getFlatsRequest: false,
  getFlatsSuccess: false,
  getFlatsFailed: false,
}

export const getAllFlatData = createAsyncThunk(
  'flats/getFlats',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getFlatDataApi()
      dispatch(getFlatByYear(response))
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getFlatSlice = createSlice({
  name: 'flats',
  initialState,
  reducers: {
    getFlatByYear: (state, action) => {
      const data2020: IFlatData[] = []
      const data2021: IFlatData[] = []
      const data2022: IFlatData[] = []
      const data2023: IFlatData[] = []
      for (let item of action.payload) {
        if (item.date.split('/').includes('2020')) {
          data2020.push(item)
        } else if (item.date.split('/').includes('2021')) {
          data2021.push(item)
        } else if (item.date.split('/').includes('2022')) {
          data2022.push(item)
        } else {
          data2023.push(item)
        }
      }
      const data2020Obj = {
        date: '2020',
        all_meters: 0,
        open_meters: 0,
        pending_meters: 0,
        close_meters: 0,
        all_percent: 0,
        open_percent: 0,
      }
      data2020.map((item) => {
        data2020Obj.all_meters += item.all_meters
        data2020Obj.open_meters += item.open_meters
        data2020Obj.pending_meters += item.pending_meters
        data2020Obj.close_meters += item.close_meters
        data2020Obj.all_percent += item.all_percent
        data2020Obj.open_percent += item.open_percent
      })
      const data2021Obj = {
        date: '2021',
        all_meters: 0,
        open_meters: 0,
        pending_meters: 0,
        close_meters: 0,
        all_percent: 0,
        open_percent: 0,
      }
      data2021.map((item) => {
        data2021Obj.all_meters += item.all_meters
        data2021Obj.open_meters += item.open_meters
        data2021Obj.pending_meters += item.pending_meters
        data2021Obj.close_meters += item.close_meters
        data2021Obj.all_percent += item.all_percent
        data2021Obj.open_percent += item.open_percent
      })
      const data2022Obj = {
        date: '2022',
        all_meters: 0,
        open_meters: 0,
        pending_meters: 0,
        close_meters: 0,
        all_percent: 0,
        open_percent: 0,
      }
      data2022.map((item) => {
        data2022Obj.all_meters += item.all_meters
        data2022Obj.open_meters += item.open_meters
        data2022Obj.pending_meters += item.pending_meters
        data2022Obj.close_meters += item.close_meters
        data2022Obj.all_percent += item.all_percent
        data2022Obj.open_percent += item.open_percent
      })
      const data2023Obj = {
        date: '2023',
        all_meters: 0,
        open_meters: 0,
        pending_meters: 0,
        close_meters: 0,
        all_percent: 0,
        open_percent: 0,
      }
      data2023.map((item) => {
        data2023Obj.all_meters += item.all_meters
        data2023Obj.open_meters += item.open_meters
        data2023Obj.pending_meters += item.pending_meters
        data2023Obj.close_meters += item.close_meters
        data2023Obj.all_percent += item.all_percent
        data2023Obj.open_percent += item.open_percent
      })
      state.flatDataByYear = [
        data2020Obj,
        data2021Obj,
        data2022Obj,
        data2023Obj,
      ]
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllFlatData.pending, (state) => {
      state.getFlatsRequest = true
      state.getFlatsSuccess = false
      state.getFlatsFailed = false
    })
    builder.addCase(getAllFlatData.fulfilled, (state, action) => {
      state.getFlatsRequest = false
      state.getFlatsSuccess = true
      state.getFlatsFailed = false
      state.flatData = [...action.payload]
    })
    builder.addCase(getAllFlatData.rejected, (state) => {
      state.getFlatsRequest = false
      state.getFlatsSuccess = false
      state.getFlatsFailed = true
    })
  },
})

export default getFlatSlice.reducer
export const { getFlatByYear } = getFlatSlice.actions
