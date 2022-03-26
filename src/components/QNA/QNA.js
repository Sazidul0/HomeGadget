import React from 'react';

const QNA = () => {
    return (
        <div>
            <h1>1.How React works</h1>
            <p>The syntax used by React components is called JSX. ReactJS is simply a JavaScript library for building user interfaces.
                React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does
                it all in one single process. Eact basically maintains a tree for you. This tree is able to do efficient diff computations
                on the nodes.

            </p>
            <h1>2.Difference between State and Props</h1>
            <p>State:
                The state is an updatable structure that is used to contain data or information about the component and can change over time.
                The change in state can happen as a response to user action or system event. It is the heart of the react component which determines
                the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local
                state or information. It can only be accessed or modified inside the component or by the component directly.

                Props:
                Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.
                It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component
                the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
            </p>
            <h1>3. How useState works</h1>
            <p>useState is a Hook or function that allows you to have state variables in functional components. We pass the initial state to this
                function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
        </div>
    );
};

export default QNA;