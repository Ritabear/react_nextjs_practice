import React from 'react'
import NotFound from '../not-found'


export default function page() {
    NotFound()
    return (
    <div>
      我是自定義的局部404頁面，還要手動調用NotFound觸發，不然會找全局的
    </div>
  )
}
