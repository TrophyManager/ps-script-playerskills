
function main() {
	var textlayer = app.activeDocument.layers[0];
	textlayer.visible = true;
	app.activeDocument.layers[8].visible = false;
	app.activeDocument.layers[7].visible = false;
	app.activeDocument.layers[6].visible = false;
	app.activeDocument.layers[5].visible = false;
	app.activeDocument.layers[4].visible = false;
	app.activeDocument.layers[3].visible = false;
	app.activeDocument.layers[2].visible = false;
	app.activeDocument.layers[1].visible = false;
	
	for (var i=0; i<95;i++) {
		app.activeDocument.layers[8].visible = false;
		app.activeDocument.layers[7].visible = false;
		app.activeDocument.layers[6].visible = false;
		app.activeDocument.layers[5].visible = false;
		app.activeDocument.layers[4].visible = false;
		app.activeDocument.layers[3].visible = false;

		if(i == 0) {
			app.activeDocument.layers[8].visible = true;
		} else if(i < 25) {
			app.activeDocument.layers[7].visible = true;
		} else if(i < 50) {
			app.activeDocument.layers[6].visible = true;
		} else if(i < 75) {
			app.activeDocument.layers[5].visible = true;
		} else if(i < 95) {
			app.activeDocument.layers[4].visible = true;
		// } else {
			// app.activeDocument.layers[3].visible = true;
		}
		textlayer.textItem.contents = "" + i;
		SaveForWeb("d:\\skills\\skill_"+i+".png", 100);
	}
	app.activeDocument.layers[8].visible = true;
	app.activeDocument.layers[7].visible = false;
	app.activeDocument.layers[6].visible = false;
	app.activeDocument.layers[5].visible = false;
	app.activeDocument.layers[4].visible = false;
	app.activeDocument.layers[3].visible = false;
	textlayer.visible = false;
	SaveForWeb("d:\\skills\\skill_empty.png", 100);
	app.activeDocument.layers[8].visible = false;
	app.activeDocument.layers[3].visible = true;
	app.activeDocument.layers[2].visible = true;
	SaveForWeb("d:\\skills\\skill_silver.png", 100);
	app.activeDocument.layers[2].visible = false;
	app.activeDocument.layers[1].visible = true;
	SaveForWeb("d:\\skills\\skill_gold.png", 100);

}

main();


function SaveForWeb(path, jpegQuality) {  
	var sfwOptions = new ExportOptionsSaveForWeb();   
	   sfwOptions.format = SaveDocumentType.PNG;
	   // sfwOptions.includeProfile = false;   
	   // sfwOptions.interlaced = 0;   
	   // sfwOptions.optimized = true;   
	   sfwOptions.PNG8 = false;
	   sfwOptions.quality = jpegQuality; //0-100   
	var pngFile = new File(path);
	activeDocument.exportDocument(pngFile, ExportType.SAVEFORWEB, sfwOptions);  
}  