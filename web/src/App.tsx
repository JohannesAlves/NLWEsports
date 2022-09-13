interface ButtonProps {
    title: string;
}

function Button(props: ButtonProps) {
    return <button>{props.title}</button>;
}

function App() {
    return (
        <div>
            <Button title="ok" />
            <Button title="nao" />
            <Button title="sim" />
        </div>
    );
}

export default App;
