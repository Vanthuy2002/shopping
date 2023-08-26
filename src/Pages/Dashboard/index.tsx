import { TrashIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { useState } from 'react';
import FlexLayout from 'src/Layout/Flex';
import Typo from 'src/components/Typo';
import Button from 'src/modules/Button';
import Toggle from 'src/modules/Checkbox/Toggle';
import { createUUID } from 'src/utils/constants';
import { IEvents } from 'src/utils/types';

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const Dashboard = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleChange = (e: IEvents) => {
    setTodo({
      ...todo,
      id: createUUID(),
      isCompleted: false,
      title: e.target.value,
    });
  };

  const addTodos = (e: React.FormEvent) => {
    e.preventDefault();
    setTodoList([...todoList, todo as Todo]);
    setTodo({ ...(todo as Todo), title: '' });
  };

  const handleComplete = (id: string, e: IEvents) => {
    const newLitsToDo = [...todoList];
    newLitsToDo.find((todo, index) => {
      if (todo.id === id) {
        newLitsToDo[index].isCompleted = e.target.checked;
      }
    });
    setTodoList(newLitsToDo);
  };

  const handleRemove = (id: string) => {
    let newLitsToDo = [...todoList];
    newLitsToDo = newLitsToDo.filter((todo) => todo.id !== id);
    setTodoList(newLitsToDo);
  };

  return (
    <div className='mt-16'>
      <Typo as='h1' className='text-lg font-medium dark:text-white'>
        Main Dashboard
      </Typo>

      <div className='w-full max-w-2xl mx-auto font-sans bg-teal-lightest'>
        <div className='p-6 m-4 bg-white rounded shadow'>
          <div className='mb-4'>
            <h1 className='text-xl font-semibold'>Todo App</h1>
            <form
              className='flex items-center mt-4'
              onSubmit={addTodos}
              autoComplete='off'
            >
              <input
                value={todo?.title}
                onChange={handleChange}
                className='flex-1 px-3 py-2 mr-4 border rounded shadow appearance-none text-grey-darker'
                placeholder='Add Todo'
              />
              <Button size='lg'>Add</Button>
            </form>
          </div>

          <FlexLayout className='flex-col gap-y-3 mb-4 !items-start'>
            {todoList.length > 0 &&
              todoList.map((todos) => (
                <FlexLayout className='w-full gap-3' key={todos?.id}>
                  <Typo
                    as='p'
                    className={classNames('flex-1 text-grey-darkest', {
                      'line-through text-gray-400': todos.isCompleted,
                    })}
                  >
                    {todos.title}
                  </Typo>
                  <Toggle onChange={(e) => handleComplete(todos.id, e)} />
                  <Button
                    onClick={() => handleRemove(todos.id)}
                    variant='remove'
                    size='normal'
                  >
                    <TrashIcon className='w-5 h-5' />
                  </Button>
                </FlexLayout>
              ))}
          </FlexLayout>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
