import React, { useState, useRef, useEffect } from 'react';

const WebDashboard = () => {
  // State variables for various dashboard functionalities
  const [selectedElement, setSelectedElement] = useState(null);
  const [pageTitle, setPageTitle] = useState('Home Page');
  const [metaDescription, setMetaDescription] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#4466e5');
  const [secondaryColor, setSecondaryColor] = useState('#e36e11');
  const [elements, setElements] = useState([]);
  const [zoom, setZoom] = useState(100);
  const [selectedDevice, setSelectedDevice] = useState('desktop');
  const [isDeviceMenuOpen, setIsDeviceMenuOpen] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [gridSize] = useState(20);

  // Refs for DOM elements
  const deviceMenuRef = useRef(null);
  // canvasContainerRef was removed as it was not explicitly used for DOM manipulation,
  // addressing the potential 'Expected ref to be a function' error.
  const canvasRef = useRef(null);

  // Device breakpoints for responsive view
  const devices = {
    mobile: { width: 375, label: 'Mobile' },
    tablet: { width: 768, label: 'Tablet' },
    desktop: { width: 1440, label: 'Desktop' }
  };

  // Effect to handle clicks outside the device menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (deviceMenuRef.current && !deviceMenuRef.current.contains(event.target)) {
        setIsDeviceMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handler for selecting a device (mobile, tablet, desktop)
  const handleDeviceSelect = (device) => {
    setSelectedDevice(device);
    setIsDeviceMenuOpen(false);
    // Adjust canvas width based on selected device
    if (canvasRef.current) {
      canvasRef.current.style.width = `${devices[device].width}px`;
    }
  };

  // Handler for zooming in on the canvas
  const handleZoomIn = () => {
    const newZoom = Math.min(zoom + 25, 200); // Max zoom 200%
    setZoom(newZoom);
    // Apply zoom transformation to the canvas
    if (canvasRef.current) {
      canvasRef.current.style.transform = `scale(${newZoom / 100})`;
      canvasRef.current.style.transformOrigin = 'center top'; // Scale from top-center
    }
  };

  // Handler for zooming out on the canvas
  const handleZoomOut = () => {
    const newZoom = Math.max(zoom - 25, 25); // Min zoom 25%
    setZoom(newZoom);
    // Apply zoom transformation to the canvas
    if (canvasRef.current) {
      canvasRef.current.style.transform = `scale(${newZoom / 100})`;
      canvasRef.current.style.transformOrigin = 'center top'; // Scale from top-center
    }
  };

  // Handler for drag start of elements from the sidebar
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('elementType', type);
  };

  // Handler for drag over the canvas (prevents default behavior to allow drop)
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handler for dropping elements onto the canvas
  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('elementType');
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      // Snap to grid if grid is enabled
      if (showGrid) {
        x = Math.round(x / gridSize) * gridSize;
        y = Math.round(y / gridSize) * gridSize;
      }

      // Create a new element and add it to the state
      const newElement = {
        id: `element-${Date.now()}`,
        type,
        content: getDefaultContent(type),
        position: { x, y }
      };
      setElements([...elements, newElement]);
    }
  };

  // Provides default content based on element type
  const getDefaultContent = (type) => {
    switch (type) {
      case 'text':
        return 'Add your text here';
      case 'heading':
        return 'Heading';
      case 'button':
        return 'Button';
      case 'link':
        return 'Link';
      case 'image':
        return 'https://placehold.co/400x300/4466e5/ffffff?text=Image'; // Using a placeholder image service
      default:
        return '';
    }
  };

  // Handler for selecting an element on the canvas
  const handleElementSelect = (id) => {
    setSelectedElement(id);
  };

  // Handler for adding an element directly via buttons (not drag/drop)
  const handleAddElement = (type) => {
    const newElement = {
      id: `element-${Date.now()}`,
      type,
      content: getDefaultContent(type),
      position: { x: 400, y: 300 } // Default position for direct add
    };
    setElements([...elements, newElement]);
    setSelectedElement(newElement.id); // Select the newly added element
  };

  // Handler for saving the website data (to localStorage in this example)
  const handleSave = () => {
    localStorage.setItem('websiteData', JSON.stringify({
      pageTitle,
      metaDescription,
      primaryColor,
      secondaryColor,
      elements
    }));
    // Using a custom modal or message box instead of alert for better UX in a real app
    alert('Website saved successfully!');
  };

  // Handler for previewing the website (simulated)
  const handlePreview = () => {
    // Using a custom modal or message box instead of alert for better UX in a real app
    alert('Preview functionality would open a new tab with the current design');
  };

  // Handler for publishing the website (simulated)
  const handlePublish = () => {
    // Using a custom modal or message box instead of alert for better UX in a real app
    alert('Website published successfully!');
  };

  // Formats the current date and time for display
  const formatDate = () => {
    const now = new Date();
    return `${now.getDate()} Jun ${now.getFullYear()}, ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  // Renders the appropriate Font Awesome icon for each element type
  const renderElementIcon = (type) => {
    switch (type) {
      case 'text': return <i className="fas fa-font"></i>;
      case 'heading': return <i className="fas fa-heading"></i>;
      case 'image': return <i className="fas fa-image"></i>;
      case 'button': return <i className="fas fa-square"></i>;
      case 'link': return <i className="fas fa-link"></i>;
      case 'divider': return <i className="fas fa-minus"></i>;
      case 'container': return <i className="fas fa-box"></i>;
      case 'columns': return <i className="fas fa-columns"></i>;
      case 'grid': return <i className="fas fa-th"></i>;
      case 'section': return <i className="fas fa-layer-group"></i>;
      case 'navigation': return <i className="fas fa-bars"></i>;
      case 'footer': return <i className="fas fa-shoe-prints fa-rotate-270"></i>;
      default: return <i className="fas fa-question"></i>;
    }
  };

  // Handler for deleting the selected element
  const handleDeleteElement = () => {
    if (selectedElement) {
      setElements(elements.filter(el => el.id !== selectedElement));
      setSelectedElement(null);
    }
  };

  return (
    // Link to Font Awesome for icons and Tailwind CSS for styling
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
      <script src="https://cdn.tailwindcss.com"></script>
      <div className="flex flex-col h-screen bg-gray-50 font-sans"> {/* Added font-sans for Inter font */}
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 rounded-md p-2">
              <i className="fas fa-arrow-left mr-2"></i>
              <span>Back to Dashboard</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900">Website Builder</h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative" ref={deviceMenuRef}>
              <button
                onClick={() => setIsDeviceMenuOpen(!isDeviceMenuOpen)}
                className="flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <i className={`fas fa-${selectedDevice === 'mobile' ? 'mobile-alt' : selectedDevice === 'tablet' ? 'tablet-alt' : 'desktop'} mr-2 text-blue-600`}></i>
                <span className="font-medium text-gray-700">{devices[selectedDevice].label}</span>
                <i className="fas fa-chevron-down ml-2 text-gray-400"></i>
              </button>
              {isDeviceMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden">
                  {Object.entries(devices).map(([device, { label }]) => (
                    <button
                      key={device}
                      onClick={() => handleDeviceSelect(device)}
                      className={`flex items-center w-full px-4 py-2 text-sm ${selectedDevice === device ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'} transition-all duration-200`}
                    >
                      <i className={`fas fa-${device === 'mobile' ? 'mobile-alt' : device === 'tablet' ? 'tablet-alt' : 'desktop'} mr-2`}></i>
                      {label}
                      {selectedDevice === device && <i className="fas fa-check ml-auto text-blue-600"></i>}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={handleSave} className="px-4 py-1.5 text-sm border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
              <i className="far fa-save mr-2"></i>
              <span>Save</span>
            </button>
            <button onClick={handlePreview} className="px-4 py-1.5 text-sm border border-gray-300 rounded-lg shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
              <i className="far fa-eye mr-2"></i>
              <span>Preview</span>
            </button>
            <button onClick={handlePublish} className="px-4 py-1.5 text-sm text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
              <i className="fas fa-paper-plane mr-2"></i>
              <span>Publish</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0 shadow-inner-right">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search elements..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                />
              </div>
            </div>
            <div className="p-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Basic Elements</h3>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['text', 'heading', 'image', 'button', 'link', 'divider'].map(type => (
                    <div
                      key={type}
                      draggable
                      onDragStart={(e) => handleDragStart(e, type)}
                      className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg cursor-grab hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm"
                    >
                      <div className="w-8 h-8 flex items-center justify-center text-gray-600 mb-1">
                        {renderElementIcon(type)}
                      </div>
                      <span className="text-xs text-gray-600 capitalize font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Layout Elements</h3>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['container', 'columns', 'grid', 'section'].map(type => (
                    <div
                      key={type}
                      draggable
                      onDragStart={(e) => handleDragStart(e, type)}
                      className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg cursor-grab hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm"
                    >
                      <div className="w-8 h-8 flex items-center justify-center text-gray-600 mb-1">
                        {renderElementIcon(type)}
                      </div>
                      <span className="text-xs text-gray-600 capitalize font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Components</h3>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['navigation', 'footer'].map(type => (
                    <div
                      key={type}
                      draggable
                      onDragStart={(e) => handleDragStart(e, type)}
                      className="flex flex-col items-center justify-center p-3 border border-gray-200 rounded-lg cursor-grab hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm"
                    >
                      <div className="w-8 h-8 flex items-center justify-center text-gray-600 mb-1">
                        {renderElementIcon(type)}
                      </div>
                      <span className="text-xs text-gray-600 capitalize font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <button className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200">
                  <i className="fas fa-file-alt mr-2 text-blue-500"></i>
                  <span>Manage Pages</span>
                  <i className="fas fa-chevron-right ml-auto text-gray-400"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Main Canvas Area */}
          <div className="flex-1 overflow-auto bg-gray-100 relative p-4 flex flex-col items-center">
            {/* Toolbar for canvas actions */}
            <div className="flex justify-center p-4 bg-white rounded-lg shadow-md mb-4 space-x-2">
              <button className="px-2.5 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <i className="fas fa-undo mr-1"></i>
                <span className="sr-only">Undo</span>
              </button>
              <button className="px-2.5 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <i className="fas fa-redo mr-1"></i>
                <span className="sr-only">Redo</span>
              </button>
              <button className="px-2.5 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <i className="far fa-copy mr-1"></i>
                <span className="sr-only">Copy</span>
              </button>
              <button className="px-2.5 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <i className="far fa-clipboard mr-1"></i>
                <span className="sr-only">Paste</span>
              </button>
              <button
                onClick={handleDeleteElement}
                disabled={!selectedElement}
                className={`px-2.5 py-1.5 text-sm border border-gray-300 rounded-md transition-all duration-200 ${
                  selectedElement
                    ? 'text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer'
                    : 'text-gray-400 bg-gray-100 cursor-not-allowed'
                }`}
              >
                <i className="far fa-trash-alt mr-1"></i>
                <span className="sr-only">Delete</span>
              </button>

              <div className="flex items-center ml-auto space-x-2">
                <span className="text-sm text-gray-600 font-medium">{zoom}%</span>
                <button
                  onClick={handleZoomIn}
                  className="px-2.5 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                  <i className="fas fa-search-plus"></i>
                  <span className="sr-only">Zoom In</span>
                </button>
                <button
                  onClick={handleZoomOut}
                  className="px-2.5 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                  <i className="fas fa-search-minus"></i>
                  <span className="sr-only">Zoom Out</span>
                </button>
                <button
                  onClick={() => setShowGrid(!showGrid)}
                  className={`px-2.5 py-1.5 text-sm border ${showGrid ? 'border-blue-500 bg-blue-50 text-blue-500' : 'border-gray-300 text-gray-700'} rounded-md hover:bg-gray-50 transition-all duration-200`}
                >
                  <i className="fas fa-th-large"></i>
                  <span className="sr-only">Toggle Grid</span>
                </button>
                <button className="px-2.5 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                  <i className="fas fa-pencil-alt"></i>
                  <span className="sr-only">Edit Mode</span>
                </button>
              </div>
            </div>

            {/* The main canvas where elements are dropped */}
            <div
              ref={canvasRef}
              className="mx-auto my-4 bg-white shadow-lg min-h-[768px] transition-all duration-300 relative rounded-lg overflow-hidden"
              style={{ width: `${devices[selectedDevice]?.width}px` }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {showGrid && (
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: `${gridSize}px ${gridSize}px`
                  }}
                />
              )}
              {elements.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-600 p-8 text-center">
                  <div className="mb-4 text-blue-500">
                    <i className="fas fa-cube text-5xl opacity-80"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Building Your Website</h2>
                  <p className="text-gray-600 mb-8 max-w-md">
                    Drag elements from the sidebar and drop them here to start building your website, or use the quick add buttons below.
                  </p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleAddElement('section')}
                      className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-blue-50 hover:border-blue-300 text-gray-700 transition-all duration-200"
                    >
                      <i className="fas fa-layer-group mr-2 text-blue-500"></i>
                      Add Section
                    </button>
                    <button
                      onClick={() => handleAddElement('text')}
                      className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-blue-50 hover:border-blue-300 text-gray-700 transition-all duration-200"
                    >
                      <i className="fas fa-font mr-2 text-blue-500"></i>
                      Add Text
                    </button>
                    <button
                      onClick={() => handleAddElement('image')}
                      className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-blue-50 hover:border-blue-300 text-gray-700 transition-all duration-200"
                    >
                      <i className="fas fa-image mr-2 text-blue-500"></i>
                      Add Image
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative h-full w-full">
                  {elements.map((element) => (
                    <div
                      key={element.id}
                      className={`absolute p-2 border-2 ${selectedElement === element.id ? 'border-blue-500 bg-blue-50 bg-opacity-20' : 'border-transparent'} cursor-move rounded-md transition-all duration-100 ease-out`}
                      style={{
                        left: `${element.position.x}px`,
                        top: `${element.position.y}px`,
                        zIndex: selectedElement === element.id ? 10 : 1 // Bring selected element to front
                      }}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent canvas click from deselecting
                        handleElementSelect(element.id);
                      }}
                      // Drag functionality for existing elements (optional, can be added later)
                      // draggable
                      // onDragStart={(e) => {
                      //   e.dataTransfer.setData('elementId', element.id);
                      // }}
                      // onDragEnd={(e) => {
                      //   // Update position based on e.clientX, e.clientY
                      // }}
                    >
                      {element.type === 'text' && <p className="text-gray-800 text-base">{element.content}</p>}
                      {element.type === 'heading' && <h2 className="text-2xl font-bold text-gray-900">{element.content}</h2>}
                      {element.type === 'button' && (
                        <button className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200">
                          {element.content}
                        </button>
                      )}
                      {element.type === 'link' && <a href="#" className="text-blue-600 hover:underline transition-colors duration-200">{element.content}</a>}
                      {element.type === 'image' && (
                        <img
                          src={element.content}
                          alt="Dynamic Element"
                          className="max-w-xs h-auto rounded-md shadow-sm object-cover"
                          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/cccccc/000000?text=Error"; }} // Fallback image
                        />
                      )}
                      {element.type === 'divider' && <hr className="my-2 border-gray-300 w-full" />}
                      {/* Add rendering for other layout elements here */}
                      {element.type === 'container' && <div className="border border-dashed border-gray-400 p-4 min-w-[150px] min-h-[100px] text-gray-50 text-sm flex items-center justify-center">Container</div>}
                      {element.type === 'columns' && <div className="grid grid-cols-2 gap-4 border border-dashed border-gray-400 p-4 min-w-[200px] min-h-[100px] text-gray-50 text-sm"><div>Col 1</div><div>Col 2</div></div>}
                      {element.type === 'grid' && <div className="grid grid-cols-3 gap-2 border border-dashed border-gray-400 p-4 min-w-[200px] min-h-[100px] text-gray-50 text-sm"><div>Grid 1</div><div>Grid 2</div><div>Grid 3</div></div>}
                      {element.type === 'section' && <div className="bg-gray-50 border border-dashed border-gray-400 p-8 min-w-[300px] min-h-[200px] text-gray-50 text-lg flex items-center justify-center">Section</div>}
                      {element.type === 'navigation' && <nav className="bg-gray-100 p-4 border border-gray-300 flex justify-around rounded-md text-gray-700 text-sm w-full"><a href="#" className="hover:text-blue-600">Home</a><a href="#" className="hover:text-blue-600">About</a><a href="#" className="hover:text-blue-600">Contact</a></nav>}
                      {element.type === 'footer' && <footer className="bg-gray-800 text-white p-4 text-center text-sm w-full rounded-md">© {new Date().getFullYear()} Your Website. All rights reserved.</footer>}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Canvas Footer Bar */}
            <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-600 border-t border-gray-200 bg-white w-full rounded-lg shadow-sm mt-4">
              <span>{devices[selectedDevice].label} ({devices[selectedDevice]?.width}px)</span>
              <span>Zoom: {zoom}%</span>
              <span>Last saved: {formatDate()}</span>
              <span>Auto-saving enabled</span>
            </div>
          </div>

          {/* Right Properties Panel */}
          <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0 shadow-inner-left">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-800 text-lg">Properties</h2>
              <button className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-1 rounded-md">
                <i className="fas fa-times"></i>
              </button>
            </div>
            {!selectedElement ? (
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-6">Select an element on the canvas to edit its properties, or manage global page settings.</p>
                <div className="mt-6">
                  <h3 className="font-bold text-gray-800 mb-4 text-md">Page Settings</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Page Title</label>
                    <input
                      type="text"
                      value={pageTitle}
                      onChange={(e) => setPageTitle(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                    <textarea
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Favicon</label>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center mr-3 shadow-inner">
                        <i className="fas fa-image text-gray-400"></i>
                      </div>
                      <button className="px-3 py-1.5 text-sm text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                        Upload
                      </button>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-4 text-md">Theme</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Colors</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-xs text-gray-500 mb-1">Primary</span>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-md mr-2 shadow-inner" style={{ backgroundColor: primaryColor }}></div>
                          <input
                            type="color" // Changed to color input for better UX
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                            className="w-full h-8 cursor-pointer rounded-md border border-gray-300"
                            title="Choose Primary Color"
                          />
                        </div>
                      </div>
                      <div>
                        <span className="block text-xs text-gray-500 mb-1">Secondary</span>
                        <div className="flex items-center">
                          <div className="w-6 h-6 rounded-md mr-2 shadow-inner" style={{ backgroundColor: secondaryColor }}></div>
                          <input
                            type="color" // Changed to color input for better UX
                            value={secondaryColor}
                            onChange={(e) => setSecondaryColor(e.target.value)}
                            className="w-full h-8 cursor-pointer rounded-md border border-gray-300"
                            title="Choose Secondary Color"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Typography</label>
                    <div className="mb-3">
                      <span className="block text-xs text-gray-500 mb-1">Headings</span>
                      <div className="relative">
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white">
                          <option>Inter</option>
                          <option>Roboto</option>
                          <option>Open Sans</option>
                          <option>Montserrat</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500 mb-1">Body</span>
                      <div className="relative">
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 bg-white">
                          <option>Inter</option>
                          <option>Roboto</option>
                          <option>Open Sans</option>
                          <option>Montserrat</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <i className="fas fa-chevron-down text-gray-400"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4">
                {/* Dynamic property panels based on selected element type */}
                {elements.find(el => el.id === selectedElement)?.type === 'text' && (
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-md">Text Properties</h3>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                      <textarea
                        value={elements.find(el => el.id === selectedElement)?.content}
                        onChange={(e) => {
                          const updatedElements = elements.map(el =>
                            el.id === selectedElement ? { ...el, content: e.target.value } : el
                          );
                          setElements(updatedElements);
                        }}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Typography</label>
                      <div className="flex space-x-2 mb-2">
                        <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                          <i className="fas fa-bold"></i>
                        </button>
                        <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                          <i className="fas fa-italic"></i>
                        </button>
                        <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                          <i className="fas fa-underline"></i>
                        </button>
                        <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                          <i className="fas fa-align-left"></i>
                        </button>
                        <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                          <i className="fas fa-align-center"></i>
                        </button>
                        <button className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-all duration-200">
                          <i className="fas fa-align-right"></i>
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Font Size</label>
                          <select className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md bg-white">
                            <option>12px</option>
                            <option>14px</option>
                            <option>16px</option>
                            <option>18px</option>
                            <option>20px</option>
                            <option>24px</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Color</label>
                          <div className="flex items-center">
                            <div className="w-6 h-6 rounded-md mr-2 bg-gray-800 shadow-inner"></div>
                            <input
                              type="color" // Changed to color input
                              value="#333333" // Placeholder, integrate actual element color
                              className="w-full h-8 cursor-pointer rounded-md border border-gray-300"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {elements.find(el => el.id === selectedElement)?.type === 'image' && (
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-md">Image Properties</h3>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input
                        type="text"
                        value={elements.find(el => el.id === selectedElement)?.content}
                        onChange={(e) => {
                          const updatedElements = elements.map(el =>
                            el.id === selectedElement ? { ...el, content: e.target.value } : el
                          );
                          setElements(updatedElements);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                    {/* Add more image properties here like width, height, alt text, etc. */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                      <input
                        type="text"
                        placeholder="Descriptive text for accessibility"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Width (px)</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Height (px)</label>
                            <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                  </div>
                )}
                {elements.find(el => el.id === selectedElement)?.type === 'button' && (
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-md">Button Properties</h3>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                      <input
                        type="text"
                        value={elements.find(el => el.id === selectedElement)?.content}
                        onChange={(e) => {
                          const updatedElements = elements.map(el =>
                            el.id === selectedElement ? { ...el, content: e.target.value } : el
                          );
                          setElements(updatedElements);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Link URL</label>
                        <input type="text" placeholder="https://example.com" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Colors</label>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <span className="block text-xs text-gray-500 mb-1">Background</span>
                                <input type="color" value="#4466e5" className="w-full h-8 cursor-pointer rounded-md border border-gray-300" />
                            </div>
                            <div>
                                <span className="block text-xs text-gray-500 mb-1">Text</span>
                                <input type="color" value="#ffffff" className="w-full h-8 cursor-pointer rounded-md border border-gray-300" />
                            </div>
                        </div>
                    </div>
                  </div>
                )}
                {elements.find(el => el.id === selectedElement)?.type === 'link' && (
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-md">Link Properties</h3>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Link Text</label>
                      <input
                        type="text"
                        value={elements.find(el => el.id === selectedElement)?.content}
                        onChange={(e) => {
                          const updatedElements = elements.map(el =>
                            el.id === selectedElement ? { ...el, content: e.target.value } : el
                          );
                          setElements(updatedElements);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                      <input
                        type="text"
                        value="#" // Placeholder, replace with actual link value from element
                        onChange={() => {}} // Placeholder, implement actual URL change handler
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Target</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                            <option value="_self">Same Window</option>
                            <option value="_blank">New Window</option>
                        </select>
                    </div>
                  </div>
                )}
                {elements.find(el => el.id === selectedElement)?.type === 'heading' && (
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-md">Heading Properties</h3>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                      <textarea
                        value={elements.find(el => el.id === selectedElement)?.content}
                        onChange={(e) => {
                          const updatedElements = elements.map(el =>
                            el.id === selectedElement ? { ...el, content: e.target.value } : el
                          );
                          setElements(updatedElements);
                        }}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                      ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Heading Level</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                            <option value="h1">H1</option>
                            <option value="h2">H2</option>
                            <option value="h3">H3</option>
                            <option value="h4">H4</option>
                            <option value="h5">H5</option>
                            <option value="h6">H6</option>
                        </select>
                    </div>
                  </div>
                )}
                {elements.find(el => el.id === selectedElement)?.type === 'divider' && (
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-md">Divider Properties</h3>
                    <p className="text-gray-500 text-sm">No specific properties for the divider yet.</p>
                    <div className="mb-4 mt-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
                        <input type="color" value="#cccccc" className="w-full h-8 cursor-pointer rounded-md border border-gray-300" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Thickness (px)</label>
                        <input type="number" value="1" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>
                )}
                {/* Add property panels for other layout elements here (container, columns, grid, section, navigation, footer) */}
                {elements.find(el => el.id === selectedElement)?.type === 'container' && (
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-md">Container Properties</h3>
                        <p className="text-gray-500 text-sm">Properties for container: background, padding, border, etc.</p>
                    </div>
                )}
                 {elements.find(el => el.id === selectedElement)?.type === 'columns' && (
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-md">Columns Properties</h3>
                        <p className="text-gray-500 text-sm">Properties for columns: number of columns, gap, etc.</p>
                    </div>
                )}
                {elements.find(el => el.id === selectedElement)?.type === 'grid' && (
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-md">Grid Properties</h3>
                        <p className="text-gray-500 text-sm">Properties for grid: columns, rows, gap, etc.</p>
                    </div>
                )}
                {elements.find(el => el.id === selectedElement)?.type === 'section' && (
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-md">Section Properties</h3>
                        <p className="text-gray-500 text-sm">Properties for section: background, padding, height, etc.</p>
                    </div>
                )}
                {elements.find(el => el.id === selectedElement)?.type === 'navigation' && (
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-md">Navigation Properties</h3>
                        <p className="text-gray-500 text-sm">Properties for navigation: links, colors, layout, etc.</p>
                    </div>
                )}
                {elements.find(el => el.id === selectedElement)?.type === 'footer' && (
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3 text-md">Footer Properties</h3>
                        <p className="text-gray-500 text-sm">Properties for footer: content, background, text color, etc.</p>
                    </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDashboard;
