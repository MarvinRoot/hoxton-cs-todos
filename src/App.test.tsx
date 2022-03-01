import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App, { removeTodo, addTodo } from './App'

describe('App', () => {
  it('adds a todo and returns the updated list of todos', () => {
    let todos = [
      {
        id: 1,
        title: 'Make dinner'
      },
      {
        id: 2,
        title: 'Drink 2lt of water'
      },
      {
        id: 3,
        title: 'Run a unit test'
      }
    ]
    const expectedResult = [
      {
        id: 1,
        title: 'Make dinner'
      },
      {
        id: 2,
        title: 'Drink 2lt of water'
      },
      {
        id: 3,
        title: 'Run a unit test'
      },
      {
        id: 4,
        title: 'Go shopping'
      }
    ]
    const result = addTodo(todos, 'Go shopping')
    expect(result).toMatchObject(expectedResult)
  })
})

describe('removeTodo', () => {
  it('remove a todo and return the remaining todos', () => {
    const todos = [
      {
        id: 1,
        title: 'Make dinner'
      },
      {
        id: 2,
        title: 'Drink 2lt of water'
      },
      {
        id: 3,
        title: 'Run a unit test'
      }
    ]

    const expectedResult = [
      {
        id: 1,
        title: 'Make dinner'
      },
      {
        id: 2,
        title: 'Drink 2lt of water'
      }
    ]

    const result = removeTodo(todos, 3)
    expect(result).toMatchObject(expectedResult)
  })

  it('return all the todos if the id does not match', () => {
    const todos = [
      {
        id: 1,
        title: 'Make dinner'
      },
      {
        id: 2,
        title: 'Drink 2lt of water'
      },
      {
        id: 3,
        title: 'Run a unit test'
      }
    ]
    const expectedTodos = todos;

    const result = removeTodo(todos, 111)
    expect(result).toMatchObject(expectedTodos)
  })

})