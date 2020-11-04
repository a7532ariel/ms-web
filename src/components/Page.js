function Page(props) {
    let dots = [...Array(6)].map((x, i) =>
        <div className={props.page === i ? 'green-dot': 'white-dot'} 
            key={i}>
        </div>
      )
    return (
        <div className="dot-container-ab">
            <div className="dot-container">
                {dots}
            </div>
        </div>
    );
}

export default Page;