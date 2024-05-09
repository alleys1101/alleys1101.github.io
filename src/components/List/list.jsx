const Lists = ({pokemonsLists}) => {
    // const {pokemonsLists} = props;
    const imgCSS = {
        border:"1px solid darkorange",
        borderRadius:"10px"
    }
    return (
        <ul className="ul-list">
            {
                pokemonsLists.map((pokemon) => {
                    return (
                        <div key={pokemon.url}>
                            <li>{pokemon.name}</li>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                style={imgCSS}
                                alt=""
                            />
                        </div>

                    )
                })
            }
        </ul>
    )
}


// class Lists extends React.Component {
//     render(){
//        const {pokemonsLists} = this.props;
//        const imgCSS = {
//            border:"1px solid darkorange",
//            borderRadius:"10px"
//        }
//         return(
//             <ul className="ul-list">
//             {
//                 pokemonsLists.map((pokemon) =>{
//                     return (
//                         <div key={pokemon.url}>
//                         <li>{pokemon.name}</li>
//                         <img
//                             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemon.id }.png`} alt=""
//                             style={imgCSS}
//                         />
//                        </div>
//
//                 )
//                 })
//             }
//             </ul>
//         );
//     }
// }
