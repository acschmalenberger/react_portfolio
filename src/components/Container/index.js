import React, {Component} from 'react';
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Wrapper from "./components/Wrapper";
import NavTabs from "./components/NavTabs";

class Container extends Component {
    state = {
        currentPage: "About"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "About") {
            return <About />;
        } else if (this.state.currentPage === "Portfolio") {
            return <Portfolio />;
        } else {
            return <Contact />;
        }
    };

    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                <Wrapper>
                    {this.renderPage()}
                </Wrapper>
                
            </div>
        );
    }
}

export default Container;
