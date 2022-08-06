import React, { Component } from "react";
import Api from './Api';

class StarWars extends Component {

    state = {
        cartaz: [],
    };

    async componentDidMount() {
        const response = await Api.get('star+wars');

        this.setState({ cartaz: response.data });
    };

    render() {

        const { cartaz } = this.state;

        return (
            <div>
                <h1 className="ms-3">Star Wars</h1>
                <hr />
                <div class="row row-cols-2 text-center">
                    {cartaz.map(cartaz => (
                        <section key={cartaz.show.id} class="d-grid gap-2 mt-3">
                            <figure>
                                <img src={cartaz.show.image.medium} alt={cartaz.show.name} />
                            </figure>
                            <h2>
                                <strong>Título: </strong>
                                {cartaz.show.name}
                            </h2>
                            <nav>
                                <a href={cartaz.show.url} alt={cartaz.show.name}> Mais informações</a>
                            </nav><br />
                        </section>
                    ))}
                </div>
            </div>
        );
    };
};

export default StarWars;