$K_lluviaServer = ""

$K_dependencies = [
	{	module: "kernel", 
		description: "Javascript extensions && global objects.", 
		path: "kernel/", 
		files: [ 
			{name: "ll_Kernel.js",   description: "Core javascript for the global object."},
			{name: "ll_Object.js",   description: "Redefinition of Object class."},
			{name: "ll_Function.js", description: "Adds functionality to objects (classes, functions, etc)."},
			{name: "ll_Module.js",   description: "Redefinition of Module class."},
			{name: "ll_Class.js",    description: "Redefinition of Class class."},
			{name: "ll_Array.js",    description: "Adds functionality to arrays."}
		]
	},
	{	module: "utils",
		description: "Uncategorized functionality.",
		path: "utils/",
		files: [
			{name: "ll_Events.js", description: ""},
			{name: "ll_Geometry.js", description: ""},
			{name: "ll_Inheritance.js", description: ""},
			{name: "ll_Physics.js", description: ""},
			{name: "ll_Strings.js", description: ""},
			{name: "ll_Webbrowser.js", description: ""}
		]
	},
	{	module: "processor",
		description: "Multithreading.",
		path: "processor/",
		files: [
			{name: "processor.js", description: "Adds classes."}
		]
	},
	{   module: "engine",
		description: "Event and execution control.",
		path: "engine/",
		files: [
			{name: "ll_Device.js", description: ""},
			{name: "ll_EventDispatcher.js", description: "Event dispatcher."},
			{name: "ll_Gate.js", description: "HTML mapping in lluvia."},
			{name: "ll_Lookup.js", description: ""},
			{name: "ll_MessageEvent.js", description: "Message generator."}
		]
	}

]

