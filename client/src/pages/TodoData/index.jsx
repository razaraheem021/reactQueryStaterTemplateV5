// for now its not used

// import React from 'react'
// import { useFetchData } from '@/hooks/useFetchData'
// import { useDeleteData } from '@/hooks/useDeleteData'

// const TodoList = () => {
//   const { data, status, error } = useFetchData({
//     endpoint: '/todos',
//     queryKeys: ['todos'],
//   })

//   const deleteTodo = useDeleteData({
//     endpoint: '/todo',
//     queryKeys: ['deleteTodos'],
//   })

//   const handleDeleteTodo = (id) => {
//     deleteTodo.mutate(id)
//   }

//   if (status === 'loading') {
//     return <p>Loading...</p>
//   }

//   if (status === 'error') {
//     return <p>Error: {error.message}</p>
//   }

//   return (
//     <div>
//       <h3>Todo List</h3>
//       <ul>
//         {data?.data?.map((todo) => (
//           <div
//             key={todo.id}
//             style={{ display: 'flex', justifyContent: 'space-between' }}
//           >
//             <p>{todo.title}</p>
//             <p>{todo.desc}</p>
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </div>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default TodoList
