const App = () => {
    const [pokemons, setPokemons] = React.useState([]);
    const [filteredPokemons, setFilteredPokemons] = React.useState([]);



    React.useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(json => {
                json.results.map((result,index) =>{
                    result.id = index+1
                })
                setPokemons(json.results);
                setFilteredPokemons(json.results);
            })
    },[]);
    const onChange = (event) => {
        const comparedPokemons = pokemons.filter(pokemon => pokemon.name.includes(event.target.value))
        setFilteredPokemons(comparedPokemons)
    }
    return (
        <div>
             <h1>宝可梦</h1>
             <Input onChangeHandler={onChange}/>
             <Lists pokemonsLists={filteredPokemons}/>
             </div>
    )
}


// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             pokemons:[],
//             egg:"蛋蛋",
//             filteredPokemons:[],
//         }
//     }
//     //使组件挂载完毕后再执行这个方法里面的内容
//     componentDidMount() {
//         fetch("https://pokeapi.co/api/v2/pokemon")
//             .then(res => res.json())
//             .then(json => {
//                 json.results.map((result,index) =>{
//                     result.id = index+1
//                 })
//                 this.setState(
//                     () => {
//                         return {
//                             pokemons: json.results,
//                             filteredPokemons: json.results
//                         }
//                     },
//                     () => {
//                         console.log(this.state)
//                     }
//                 )
//             })
//     }
//
//     onChange = (event) => {
//         const comparedPokemons = this.state.pokemons.filter(pokemon => pokemon.name.includes(event.target.value))
//         this.setState(
//             () => {
//                 return {filteredPokemons: comparedPokemons}
//             },
//             () => {
//                 console.log(this.state.filteredPokemons)
//             }
//         )
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>宝可梦</h1>
//                 <Input onChangeHandler={this.onChange}/>
//                 <Lists pokemonsLists={this.state.filteredPokemons} />
//             </div>
//         )
//     }
// }
