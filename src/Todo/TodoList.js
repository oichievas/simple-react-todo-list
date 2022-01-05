import TodoItem from "./TodoItem"
import PropTypes from "prop-types"

const styles = {
    ul: {
        listStyle: 'none',
        padding: 0,
        margin:0
    }
}



function TodoList (props) {
    return (
        <>
        <ul style={styles.ul}>
            { props.todos.map((todo, index) => 
            <TodoItem 
                todo={todo} 
                key={todo.id} 
                index={index} 
                onChange={props.onToggle}
                />) }
        </ul>
        </>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array,
    onToggle: PropTypes.func
}

export default TodoList