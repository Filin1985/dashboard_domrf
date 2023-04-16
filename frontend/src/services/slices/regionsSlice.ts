import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRegionsDataApi } from '../../api'

export interface IRegionData {
  region: string
  year_2020?: number
  year_2021?: number
  year_2022?: number
  year_2023?: number
  all: number
}

interface IRegionSlice {
  regionsData: IRegionData[]
  filteredRegions2020: IRegionData[]
  filteredRegions2021: IRegionData[]
  filteredRegions2022: IRegionData[]
  filteredRegions2023: IRegionData[]
  getRegionsRequest: boolean
  getRegionsSuccess: boolean
  getRegionsFailed: boolean
  isExpended: boolean
  isFiltered: boolean
  filterType: string
}

const initialState: IRegionSlice = {
  regionsData: [],
  filteredRegions2020: [],
  filteredRegions2021: [],
  filteredRegions2022: [],
  filteredRegions2023: [],
  getRegionsRequest: false,
  getRegionsSuccess: false,
  getRegionsFailed: false,
  isExpended: false,
  isFiltered: false,
  filterType: '',
}

export const getAllRegionData = createAsyncThunk(
  'regions/getRegions',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await getRegionsDataApi()
      const newResponse = response
        .filter((item) => item.region !== '﻿Российская Федерация')
        .sort((a, b) => {
          return b.all - a.all
        })
      dispatch(filterInitialData(newResponse))
      return newResponse
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const getRegionSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    expandData: (state) => {
      state.isExpended = !state.isExpended
    },
    filterInitialData: (state, action) => {
      const regions2020: IRegionData[] = []
      const regions2021: IRegionData[] = []
      const regions2022: IRegionData[] = []
      const regions2023: IRegionData[] = []
      action.payload.forEach((item: IRegionData) => {
        const newItem2020 = {
          region: '',
          year_2020: 0,
          all: 0,
        }
        const newItem2021 = {
          region: '',
          year_2021: 0,
          all: 0,
        }
        const newItem2022 = {
          region: '',
          year_2022: 0,
          all: 0,
        }
        const newItem2023 = {
          region: '',
          year_2023: 0,
          all: 0,
        }
        newItem2020['region'] = item.region
        if (typeof item.year_2020 !== 'undefined') {
          newItem2020['year_2020'] = item.year_2020
        }
        newItem2020['all'] = item.all

        newItem2021['region'] = item.region
        if (typeof item.year_2021 !== 'undefined') {
          newItem2021['year_2021'] = item.year_2021
        }
        newItem2021['all'] = item.all

        newItem2022['region'] = item.region
        if (typeof item.year_2022 !== 'undefined') {
          newItem2022['year_2022'] = item.year_2022
        }
        newItem2022['all'] = item.all

        newItem2023['region'] = item.region
        if (typeof item.year_2023 !== 'undefined') {
          newItem2023['year_2023'] = item.year_2023
        }
        newItem2023['all'] = item.all
        regions2020.push(newItem2020)
        regions2021.push(newItem2021)
        regions2022.push(newItem2022)
        regions2023.push(newItem2023)
      })
      state.filteredRegions2020 = [...regions2020]
      state.filteredRegions2021 = [...regions2021]
      state.filteredRegions2022 = [...regions2022]
      state.filteredRegions2023 = [...regions2023]
    },
    setFilterTypes: (state, action) => {
      state.isFiltered = true
      state.filterType = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllRegionData.pending, (state) => {
      state.getRegionsRequest = true
      state.getRegionsSuccess = false
      state.getRegionsFailed = false
    })
    builder.addCase(getAllRegionData.fulfilled, (state, action) => {
      state.getRegionsRequest = false
      state.getRegionsSuccess = true
      state.getRegionsFailed = false
      state.regionsData = [...action.payload]
    })
    builder.addCase(getAllRegionData.rejected, (state) => {
      state.getRegionsRequest = false
      state.getRegionsSuccess = false
      state.getRegionsFailed = true
    })
  },
})

export default getRegionSlice.reducer
export const { expandData, filterInitialData, setFilterTypes } =
  getRegionSlice.actions
