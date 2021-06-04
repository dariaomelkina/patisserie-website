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
        console.log(this.props);
        if (this.props.loading) {
            return <div>Loading</div>
        }
        if (this.props.error) {
            return <div style={{color: 'red'}}>ERROR: {this.props.error}</div>
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

                        {this.props.products.data.map(product => (product.type === "cake" &&
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

                        {this.props.products.data.map(product => (product.type === "treat" &&
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

                        {this.props.products.data.map(product => (product.type === "drink" &&
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

                        {this.props.products.data.map(product => (product.type === "vegan" &&
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

// const ProductList1 = ({products}) => {
//     this.props.loadData();
//
//     return (

//     );
// };

// const mapStatesToProps = state => {
//     return {
//         products: state.shop.products,
//     }
// }
//
// export default connect(mapStatesToProps)(ProductList);

const mapStateToProps = state => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
});

const mapDispatchToProps = {
    loadProductData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
