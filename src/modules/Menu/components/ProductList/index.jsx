import React from 'react';
import { connect } from 'react-redux';
// Components
import Product from '../Product';

const ProductList = ({ products }) => {
    return (
        <section className="flex-sect" id="ivl8bg">
            <div className="container-width">
                <div className="flex-title" id="ifqd83">
                    <div id="ipf36l">CAKE MENU
                        <br />
                    </div>
                </div>
                <div className="cards" id="ingsqg">

                    {products.map(product => (product.type === "cake" &&
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
                        <br />
                    </div>
                </div>
                <div className="cards" id="ingsqg">

                    {products.map(product => (product.type === "treat" &&
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
                        <br />
                    </div>
                </div>
                <div className="cards" id="ingsqg">

                    {products.map(product => (product.type === "drink" &&
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
                        <br />
                    </div>
                </div>
                <div className="cards" id="ingsqg">

                    {products.map(product => (product.type === "vegan" &&
                        <Product
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>
            </div>

        </section>
    );
};

const mapStatesToProps = state => {
    return {
        products: state.shop.products,
    }
}

export default connect(mapStatesToProps)(ProductList);
