import { useState } from 'react'

interface Hook {
  editable: boolean
  handleEdit: () => void
  handleDelete: () => void
}

export const useCommentUser = (): Hook => {
  const [editable, isEditable] = useState<boolean>(false)

  const handleEdit = () => isEditable((prev) => !prev)

  const handleDelete = () => alert('Ola papu')

  return { editable, handleEdit, handleDelete }
}
