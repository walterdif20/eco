var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Carton_1 = new ol.format.GeoJSON();
var features_Carton_1 = format_Carton_1.readFeatures(json_Carton_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carton_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Carton_1.addFeatures(features_Carton_1);var lyr_Carton_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carton_1, 
                style: style_Carton_1,
                title: '<img src="styles/legend/Carton_1.png" /> Carton'
            });var format_Aceite_2 = new ol.format.GeoJSON();
var features_Aceite_2 = format_Aceite_2.readFeatures(json_Aceite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aceite_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Aceite_2.addFeatures(features_Aceite_2);cluster_Aceite_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Aceite_2
});var lyr_Aceite_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Aceite_2, 
                style: style_Aceite_2,
                title: '<img src="styles/legend/Aceite_2.png" /> Aceite'
            });var format_Papel_3 = new ol.format.GeoJSON();
var features_Papel_3 = format_Papel_3.readFeatures(json_Papel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Papel_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Papel_3.addFeatures(features_Papel_3);cluster_Papel_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Papel_3
});var lyr_Papel_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Papel_3, 
                style: style_Papel_3,
                title: '<img src="styles/legend/Papel_3.png" /> Papel'
            });var format_Electronica_4 = new ol.format.GeoJSON();
var features_Electronica_4 = format_Electronica_4.readFeatures(json_Electronica_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Electronica_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Electronica_4.addFeatures(features_Electronica_4);cluster_Electronica_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Electronica_4
});var lyr_Electronica_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Electronica_4, 
                style: style_Electronica_4,
                title: '<img src="styles/legend/Electronica_4.png" /> Electronica'
            });var format_Plastico_5 = new ol.format.GeoJSON();
var features_Plastico_5 = format_Plastico_5.readFeatures(json_Plastico_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plastico_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Plastico_5.addFeatures(features_Plastico_5);cluster_Plastico_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Plastico_5
});var lyr_Plastico_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Plastico_5, 
                style: style_Plastico_5,
                title: '<img src="styles/legend/Plastico_5.png" /> Plastico'
            });var format_Tapitas_6 = new ol.format.GeoJSON();
var features_Tapitas_6 = format_Tapitas_6.readFeatures(json_Tapitas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tapitas_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Tapitas_6.addFeatures(features_Tapitas_6);cluster_Tapitas_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Tapitas_6
});var lyr_Tapitas_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Tapitas_6, 
                style: style_Tapitas_6,
                title: '<img src="styles/legend/Tapitas_6.png" /> Tapitas'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Carton_1.setVisible(false);lyr_Aceite_2.setVisible(false);lyr_Papel_3.setVisible(false);lyr_Electronica_4.setVisible(false);lyr_Plastico_5.setVisible(false);lyr_Tapitas_6.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_Carton_1,lyr_Aceite_2,lyr_Papel_3,lyr_Electronica_4,lyr_Plastico_5,lyr_Tapitas_6];
lyr_Carton_1.set('fieldAliases', {'Carton': 'Carton', 'Plastico': 'Plastico', 'Tapitas': 'Tapitas', 'Papel': 'Papel', 'Tetrabrick': 'Tetrabrick', 'Electronic': 'Electronic', 'Aceite': 'Aceite', 'Nombre': 'Nombre', });
lyr_Aceite_2.set('fieldAliases', {'Carton': 'Carton', 'Plastico': 'Plastico', 'Tapitas': 'Tapitas', 'Papel': 'Papel', 'Tetrabrick': 'Tetrabrick', 'Electronic': 'Electronic', 'Aceite': 'Aceite', 'Nombre': 'Nombre', });
lyr_Papel_3.set('fieldAliases', {'Carton': 'Carton', 'Plastico': 'Plastico', 'Tapitas': 'Tapitas', 'Papel': 'Papel', 'Tetrabrick': 'Tetrabrick', 'Electronic': 'Electronic', 'Aceite': 'Aceite', 'Nombre': 'Nombre', });
lyr_Electronica_4.set('fieldAliases', {'Carton': 'Carton', 'Plastico': 'Plastico', 'Tapitas': 'Tapitas', 'Papel': 'Papel', 'Tetrabrick': 'Tetrabrick', 'Electronic': 'Electronic', 'Aceite': 'Aceite', 'Nombre': 'Nombre', });
lyr_Plastico_5.set('fieldAliases', {'Carton': 'Carton', 'Plastico': 'Plastico', 'Tapitas': 'Tapitas', 'Papel': 'Papel', 'Tetrabrick': 'Tetrabrick', 'Electronic': 'Electronic', 'Aceite': 'Aceite', 'Nombre': 'Nombre', });
lyr_Tapitas_6.set('fieldAliases', {'Carton': 'Carton', 'Plastico': 'Plastico', 'Tapitas': 'Tapitas', 'Papel': 'Papel', 'Tetrabrick': 'Tetrabrick', 'Electronic': 'Electronic', 'Aceite': 'Aceite', 'Nombre': 'Nombre', });
lyr_Carton_1.set('fieldImages', {'Carton': 'TextEdit', 'Plastico': 'TextEdit', 'Tapitas': 'TextEdit', 'Papel': 'TextEdit', 'Tetrabrick': 'TextEdit', 'Electronic': 'TextEdit', 'Aceite': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Aceite_2.set('fieldImages', {'Carton': 'TextEdit', 'Plastico': 'TextEdit', 'Tapitas': 'TextEdit', 'Papel': 'TextEdit', 'Tetrabrick': 'TextEdit', 'Electronic': 'TextEdit', 'Aceite': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Papel_3.set('fieldImages', {'Carton': 'TextEdit', 'Plastico': 'TextEdit', 'Tapitas': 'TextEdit', 'Papel': 'TextEdit', 'Tetrabrick': 'TextEdit', 'Electronic': 'TextEdit', 'Aceite': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Electronica_4.set('fieldImages', {'Carton': 'TextEdit', 'Plastico': 'TextEdit', 'Tapitas': 'TextEdit', 'Papel': 'TextEdit', 'Tetrabrick': 'TextEdit', 'Electronic': 'TextEdit', 'Aceite': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Plastico_5.set('fieldImages', {'Carton': 'TextEdit', 'Plastico': 'TextEdit', 'Tapitas': 'TextEdit', 'Papel': 'TextEdit', 'Tetrabrick': 'TextEdit', 'Electronic': 'TextEdit', 'Aceite': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Tapitas_6.set('fieldImages', {'Carton': 'TextEdit', 'Plastico': 'TextEdit', 'Tapitas': 'TextEdit', 'Papel': 'TextEdit', 'Tetrabrick': 'TextEdit', 'Electronic': 'TextEdit', 'Aceite': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Carton_1.set('fieldLabels', {'Carton': 'inline label', 'Plastico': 'inline label', 'Tapitas': 'inline label', 'Papel': 'inline label', 'Tetrabrick': 'inline label', 'Electronic': 'inline label', 'Aceite': 'inline label', 'Nombre': 'no label', });
lyr_Aceite_2.set('fieldLabels', {'Carton': 'inline label', 'Plastico': 'inline label', 'Tapitas': 'inline label', 'Papel': 'inline label', 'Tetrabrick': 'inline label', 'Electronic': 'inline label', 'Aceite': 'inline label', 'Nombre': 'no label', });
lyr_Papel_3.set('fieldLabels', {'Carton': 'inline label', 'Plastico': 'inline label', 'Tapitas': 'inline label', 'Papel': 'inline label', 'Tetrabrick': 'inline label', 'Electronic': 'inline label', 'Aceite': 'inline label', 'Nombre': 'no label', });
lyr_Electronica_4.set('fieldLabels', {'Carton': 'inline label', 'Plastico': 'inline label', 'Tapitas': 'inline label', 'Papel': 'inline label', 'Tetrabrick': 'inline label', 'Electronic': 'inline label', 'Aceite': 'inline label', 'Nombre': 'no label', });
lyr_Plastico_5.set('fieldLabels', {'Carton': 'inline label', 'Plastico': 'inline label', 'Tapitas': 'inline label', 'Papel': 'inline label', 'Tetrabrick': 'inline label', 'Electronic': 'inline label', 'Aceite': 'inline label', 'Nombre': 'no label', });
lyr_Tapitas_6.set('fieldLabels', {'Carton': 'inline label', 'Plastico': 'inline label', 'Tapitas': 'inline label', 'Papel': 'inline label', 'Tetrabrick': 'inline label', 'Electronic': 'inline label', 'Aceite': 'inline label', 'Nombre': 'no label', });
lyr_Tapitas_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});