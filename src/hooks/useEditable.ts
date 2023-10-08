import { useState } from 'react'

export const useEditable = (): [boolean, () => void] => {
  const [editable, isEditable] = useState<boolean>(false)

  const handleEditable = () => isEditable((prev) => !prev)

  return [editable, handleEditable]
}
