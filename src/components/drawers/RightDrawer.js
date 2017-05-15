import React from 'react';
import Drawer from 'react-md/lib/Drawers';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons/Button';

const RightDrawer = ({drawerName, getDrawerVisible, handleToggleDrawer, handleCloseDrawer, children}) => {
  return (
    <Drawer
      visible={getDrawerVisible(drawerName)}
      onVisibilityToggle={() => handleToggleDrawer(drawerName)}
      type={Drawer.DrawerTypes.TEMPORARY}
      position='right'
      header={
        <Toolbar
          nav={<Button icon onClick={() => handleCloseDrawer(drawerName)}>close</Button>}
          className="md-divider-border md-divider-border--bottom"
        />
      }
      style={{ zIndex: 100 }}
    >
      {children}
    </Drawer>
  )
}

export default RightDrawer;