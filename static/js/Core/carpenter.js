

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
// DOM modifications : insert/delete elements based on a specific instruction framework (blueprint) //
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://

////////////////////////////////////////////////////////////
// Base Class : build items without any predefined logics //
////////////////////////////////////////////////////////////

class Carpenter{
	
	
	constructor(blueprint=null, target=null, storage={}){                  // formatted instructions (list), html tag where the injection will take place (string), storage ?
		
		this.blueprint = blueprint;                                 // instructions used to build html blocks displayed in the HTML webpage : exemple = {"item":<item>,"attributes":[<att1>,<att2>],"children":[<recursive_ex1>,<recursive_ex2>],"specific_attr1":<>,"specific_attr2":<>} -> <{item}> {specific_attr1}{children} </{item}>
		this.target = target;                                       // location where the instructions are built (not the id but the html element)
		this.storage = storage;                                     // additional storage used for logic (e.g : dropdowns)
		
		this.specific_attributes = ["value","text","textContent"];  //
	}
	
	
	newBuilds(blueprint=null,target=null,storage={}){
		
		if (blueprint !== null){
			this.blueprint = blueprint;
		}
		
		if (target !== null) {
			this.target = target;
		}
		
		this.storage = storage;
	}
	
	linkChild(target, child){
	
		let item = document.createElement(child["item"]);
		if ("attributes" in child){
			for (let k in child["attributes"]){
				var v = child["attributes"][k];
				item.setAttribute(k, v);
			}
		}
		
		for (let i in this.specific_attributes){
			var s_attr = this.specific_attributes[i];
			if (s_attr in child){
				item[s_attr] = child[s_attr];
			}
		}
		target.appendChild(item);
		return [target,item];
	}
	
	// main method to call
	buildBlueprint(blueprint=null, target=null){
		
		if (blueprint==null){
			blueprint = this.blueprint;
		}
		if (target==null){
			target = this.target;
		}

		for (let i=0;i<blueprint.length;i++){
			var section = blueprint[i];

			let linkage = this.linkChild(target,section);
			if (section.hasOwnProperty("children")){
				for (let j=0; j<section["children"].length;j++){
					let child = section["children"][j];
	
			
					this.buildBlueprint([child], linkage[1]);
				}
			}
		}
	}
	
	
	killChildren(target){
		try {
			while(target.firstChild){
			target.removeChild(target.lastChild);
			}
		}
		catch (error) {
      //console.error(error);
      // Expected output: ReferenceError: nonExistentFunction is not defined
      // (Note: the exact output may be browser-dependent)
		}

	}
	
	
}






///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Config class : Load required libraries (css / js) - add required (meta) tags  - load required data (json) //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



class BuildConfig{
	
	constructor(name_config="config"){
		this.builder = new Carpenter();
		if (Array.isArray(name_config)){  // if its an array, the order in name_config list should match the implementation one
			this.config = {"meta":[],"css":[],"js":[],"content":[]};
			let meta =[];
			let css = [];
			let js = [];
			let content = [];
			let anchor = [];
			
			
			for (let i in name_config){
				
				let config = window[name_config[i]];
				
				if ("meta" in config){
					meta = meta.concat(config["meta"]);
				}
				if ("css" in config){
					css = css.concat(config["css"]);
				}
				if ("js" in config){
					js = js.concat(config["js"]);
				}
				if ("content" in config){
					
					content.push(config["content"]);     // no concat , push to execute blocks sequentially but distinct
 					if ("content_block_id" in config){            // if content block id is in config
						anchor.push(config["content_block_id"]);
					}
					else{
				
						anchor.push(null);
					}
				}

			}
			this.config["meta"] = meta;
			this.config["css"] = css;
			this.config["js"] = js;
			this.config["content"] = content;
			this.config["anchor"] = anchor;
		}
		else{
			// instantiation : carpenter
			
			this.config = window[name_config];
			
		}
	}
	
	
	loadMetaDescription(){
		
		// Need to add viewport, charset etc
		
		try{
			let blueprint_desc = []
			// title
			if ("title" in this.config["meta"]){
				blueprint_desc.push({"item":"title","text":config["meta"]["title"]});
			}
			
			// favicon
			if ("icon" in this.config["meta"]){
				blueprint_desc.push({"item":"link","attributes":{"type":"image/png","rel":"icon","href":this.config["meta"]["icon"]}});
			}
			
			
			// open graph
			const open_graph = this.config["meta"]["og"];
			
			for (let i in open_graph){
				blueprint_desc.push({"item":"meta","attributes":{"property":"og:"+i,"content":open_graph[i]}});
			}
			
			this.builder.newBuilds(blueprint_desc,document.getElementsByTagName('head')[0]);
	
			this.builder.buildBlueprint();
		}
		
		catch(error){
			console.log("........");
			console.log("Not able to read meta description and inject them:");
			console.log(error);
			console.log(".........");
		}
	}
	
	
	loadCssStyle(){
		
		try{
			let blueprint_css = [];
			for (let i in this.config["css"]){
				blueprint_css.push({"item":"link","attributes":this.config["css"][i]});
			}
			this.builder.newBuilds(blueprint_css, document.getElementsByTagName('head')[0]);
			this.builder.buildBlueprint();
		}
		
		catch(error){
			console.log("........");
			console.log("Not able to load all CSS libraries");
			console.log(error);
			console.log(".........");
		}
	}
	
	
	loadJsLib(){
		
		try{
			let blueprint_js = [];
			for (let i in this.config["js"]){
				blueprint_js.push({"item":"script","attributes":this.config["js"][i]})
			}
			this.builder.newBuilds(blueprint_js, document.getElementsByTagName('head')[0]);
			this.builder.buildBlueprint();
		}
		
		catch(error){
			console.log("........");
			console.log("Not able to load all js libraries");
			console.log(error);
			console.log(".........");
		}
	}
	
	
	loadContent(){
		
		try{
	
	
			// var blueprint_content = this.applyMapping(this.config["content"], this.config["mapping_template"], this.config["mapping_values"]); need to rework templating in Carpenter
			var blueprint_content = this.config["content"];
			if ("anchor" in this.config){
				let anchor = this.config["anchor"];
			
				for (let i in anchor){		
					if(anchor[i]==null){
						this.builder.newBuilds(blueprint_content[i], document.getElementsByTagName('body')[0]);   // body by default if no anchor
					}
					else{
						this.builder.newBuilds(blueprint_content[i], document.getElementById(anchor[i]));
					}
					
					this.builder.buildBlueprint();
				}

			}
			else{
			this.builder.newBuilds(blueprint_content, document.getElementsByTagName('body')[0]);
			this.builder.buildBlueprint();
			}
			
			
		}
		
		
		catch(error){
			console.log("........");
			console.log("Not able to load all json contents");
			console.log(error);
			console.log("........");
		}
	}
	
	
	applyMapping(content, template, value){
		
		for (let alias in value){
			let replacement = value[alias];
			let position = template[alias][0];
			let target = template[alias][1];
			var section = content;
			for (let i=0; i<position.length;i++){
				let p = position[i];
				
				if (i==0){
					section =section[p];
				}
				else{
					section = section["children"][p];
				}
				
			
			}
			section[target] = replacement;
		}
		return content;
	}
	
	
}

