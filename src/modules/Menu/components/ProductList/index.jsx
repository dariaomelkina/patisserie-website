import * as React from 'react';
import {connect} from 'react-redux';
import {loadProductData} from "../../../../redux/thunk/actions";
// Components
import Product from '../Product';

class ProductList extends React.Component {
    componentDidMount() {
        this.props.loadProductData();
    };

    render() {
        if (this.props.loading) {
            return <div className="flex-sect" id="ivl8bg">
                <div className="flex-title" id="ifqd83">
                    <div id="ipf36l">
                        Loading products...
                    </div>
                </div>
            </div>
        }
        if (this.props.error) {
            return <div className="flex-sect" id="ivl8bg">
                <div className="flex-title" id="ifqd83">
                    <div id="ipf36l">Error with getting data for menu. Make sure that json-server
                        is running on a correct port.
                    </div>
                </div>
            </div>
        }
        return (
            <section className="flex-sect" id="ivl8bg">
                <div className="container-width">
                    <div className="flex-title" id="ifqd83">
                        <div id="ipf36l">CAKE MENU
                            <br/>
                        </div>
                    </div>
                    <div className="cards" id="ingsqg">

                        {this.props.data.map(product => (product.type === "cake" &&
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </div>
                </div>

                <div className="container-width">
                    <div className="flex-title" id="ifqd83">
                        <div id="ipf36l">TREATS MENU
                            <br/>
                        </div>
                    </div>
                    <div className="cards" id="ingsqg">

                        {this.props.data.map(product => (product.type === "treat" &&
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </div>
                </div>

                <div className="container-width">
                    <div className="flex-title" id="ifqd83">
                        <div id="ipf36l">DRINKS MENU
                            <br/>
                        </div>
                    </div>
                    <div className="cards" id="ingsqg">

                        {this.props.data.map(product => (product.type === "drink" &&
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </div>
                </div>

                <div className="container-width">
                    <div className="flex-title" id="ifqd83">
                        <div id="ipf36l">VEGAN MENU
                            <br/>
                        </div>
                    </div>
                    <div className="cards" id="ingsqg">

                        {this.props.data.map(product => (product.type === "vegan" &&
                            <Product
                                key={product.id}
                                product={product}
                            />
                        ))}

                    </div>
                </div>

            </section>
        );
    }
}

const mapStateToProps = state => ({
    data: state.reduxThunk.data,
    loading: state.reduxThunk.loading,
    error: state.reduxThunk.error,
});

const mapDispatchToProps = {
    loadProductData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
