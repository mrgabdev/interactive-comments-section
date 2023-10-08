import { create } from 'zustand'
import data from '../../data.json'

interface State {
  currentUser: string
  userThumbnail: string
}

export const useComments = create<State>(() => ({
  currentUser: data.currentUser.username,
  userThumbnail: data.currentUser.image.webp || data.currentUser.image.png
}))
