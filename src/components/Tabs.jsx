import React, {
    cloneElement,
    createContext,
    useContext,
    useMemo,
    useState
  } from 'react';
  import PropTypes from 'prop-types';
  import omit from 'lodash';
  
  const TabsContext = createContext({});
  
  function useTabsContext() {
    const context = useContext(TabsContext);
    if (!context) {
      throw new Error(
        'Tabs compound components should be rendered inside the Tabs component',
      );
    }
    return context;
  }
  
  function Tabs(props) {
    const { children, active } = props;
  
    const [activeIndex, setActiveIndex] = useState(active || 0);
  
    const value = useMemo(() => ({
      activeIndex, setActiveIndex
    }), [activeIndex]);
  
    return (
      <TabsContext.Provider value={value}>
        {children}
      </TabsContext.Provider>
    );
  }
  
  function List(props) {
    const { children } = props;
    return (<div className="flex flex-nowrap p-2" role="group">{children}</div>);
  }
  
  function Tab(props) {
    const {
      children, onClick, index, as
    } = props;
    const { activeIndex, setActiveIndex } = useTabsContext();
  
    function handleClick(id) {
      setActiveIndex(id);
      if (onClick) onClick(id);
    }
  
    const commonProps = {
      className: `p-4 text-teal-200 ${index !== activeIndex ? 'is-active' : 'border-b border-solid border-teal-400'}`,
      onClick: () => handleClick(index)
    };
  
    let render = (
      <button
        type="button"
        {...commonProps}
      >
        {children}
      </button>
    );
  
    if (!as && children === null) {
      throw new Error('Children in Tab is required');
    }
  
    if (as) {
      const elementProps = { ...omit(as.props, ['as']) };
      render = cloneElement(as, {
        props: elementProps,
        ...commonProps
      });
    }
  
    return (
      render
    );
  }
  
  Tabs.defaultProps = {
    active: 0,
  };
  
  Tabs.propTypes = {
    active: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    children: PropTypes.node.isRequired,
  };
  
  List.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  Tab.defaultProps = {
    onClick: () => {},
    index: null,
    children: null,
    as: null,
  };
  
  Tab.propTypes = {
    onClick: PropTypes.func,
    index: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    children: PropTypes.node,
    as: PropTypes.node,
  };
  
  Tabs.List = List;
  Tabs.Tab = Tab;
  export default Tabs;
  