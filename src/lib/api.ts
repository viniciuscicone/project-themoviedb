
import axios from "axios"

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL

export const getMovieDetails = async (id: string) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits,similar`,
  )
  return response.data
}

export const getTVDetails = async (id: string) => {
  const response = await axios.get(
    `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=credits,similar`,
  )
  return response.data
}

export const getMovieImages = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`)
  return response.data
}

export const getMovieVideos = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)
  return response.data
}

export const getTVImages = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/tv/${id}/images?api_key=${API_KEY}`)
  return response.data
}

export const getTVVideos = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=pt-BR`)
  return response.data
}

