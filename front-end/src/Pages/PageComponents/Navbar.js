import React from 'react';

const Navbar = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center row-hl">
                <div className="p-4 item-hl">Flex Item</div>
                <div className="p-4 item-hl">Flex Item</div>
                <div className="p-4 item-hl">Flex Item</div>
            </div>
            <div className="d-flex justify-content-between row-hl">
                <div className="p-4 item-hl">Flex Item</div>
                <div className="p-4 item-hl">Flex Item</div>
                <div className="p-4 item-hl">Flex Item</div>
            </div>
        </div>
    );
};

export default Navbar;