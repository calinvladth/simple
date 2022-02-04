function App() {

    const list = []

    for (let i = 0; i < 50; i++) {
        const data = {
            item: i + 1
        }

        list.push(data)
    }

    return <>
        <div>
            <h1>Gallery Basic</h1>
        </div>

        <div className="gallery">

            {
                list.map(o => <div key={o.item}>{o.item}</div>)
            }

        </div>
    </>
}

export default App;
