import React, {useContext} from "react"
import PropTypes from "prop-types"
import Context from "../context"

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '2px solid #4ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem ({todo, index, onChange}) {
    const {removeTodo} = useContext(Context)
    let classes = []
    if(todo.completed) {
        classes.push('done')
    }
    return (
        <>
            <li style={styles.li}> 
                <span className={classes.join(' ')} >
                    <input 
                    style={styles.input} 
                    type="checkbox" 
                    onChange={() => onChange(todo.id)}
                    checked={todo.completed}
                    />
                    <strong>{index + 1}</strong>
                    &nbsp;
                    {todo.title}
                </span>
                <button className="delete" onClick={() => removeTodo(todo.id)} > &times; </button>
            </li>
    
        </>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    index: PropTypes.number,
    onChange: PropTypes.func
}

export default TodoItem