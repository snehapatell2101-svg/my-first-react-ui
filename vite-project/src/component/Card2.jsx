import React from 'react'

const Card2 = () => {
    return (
        <div>
            <h2 className='text-bold text-center'>React js</h2>

            <p className='text-muted mt-2'>
                ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability.

                In this example:

                import React from 'react': Imports React to create components and use JSX.
                function App() : Defines a functional component called App.
                return ( ... ): Returns JSX that represents the UI (a div with an h1 tag displaying "Hello, World!").
                export default App: Exports the App component so it can be used elsewhere.
            </p>
        </div>
    )
}

export default Card2
