var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_NevadaCountyBoundary_1 = new ol.format.GeoJSON();
var features_NevadaCountyBoundary_1 = format_NevadaCountyBoundary_1.readFeatures(json_NevadaCountyBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NevadaCountyBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NevadaCountyBoundary_1.addFeatures(features_NevadaCountyBoundary_1);
var lyr_NevadaCountyBoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NevadaCountyBoundary_1, 
                style: style_NevadaCountyBoundary_1,
                interactive: false,
                title: '<img src="styles/legend/NevadaCountyBoundary_1.png" /> Nevada County Boundary'
            });
var format_SuitableArea_2 = new ol.format.GeoJSON();
var features_SuitableArea_2 = format_SuitableArea_2.readFeatures(json_SuitableArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuitableArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuitableArea_2.addFeatures(features_SuitableArea_2);
var lyr_SuitableArea_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SuitableArea_2, 
                style: style_SuitableArea_2,
                interactive: true,
                title: '<img src="styles/legend/SuitableArea_2.png" /> Suitable Area'
            });
var format_ParcelBoundary_3 = new ol.format.GeoJSON();
var features_ParcelBoundary_3 = format_ParcelBoundary_3.readFeatures(json_ParcelBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelBoundary_3.addFeatures(features_ParcelBoundary_3);
var lyr_ParcelBoundary_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParcelBoundary_3, 
                style: style_ParcelBoundary_3,
                interactive: true,
                title: '<img src="styles/legend/ParcelBoundary_3.png" /> Parcel Boundary'
            });

lyr_Basemap_0.setVisible(true);lyr_NevadaCountyBoundary_1.setVisible(true);lyr_SuitableArea_2.setVisible(true);lyr_ParcelBoundary_3.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_NevadaCountyBoundary_1,lyr_SuitableArea_2,lyr_ParcelBoundary_3];
lyr_NevadaCountyBoundary_1.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_SuitableArea_2.set('fieldAliases', {'APN': 'APN', 'Acres': 'Acres', });
lyr_ParcelBoundary_3.set('fieldAliases', {'APN': 'APN', 'Address': 'Address', 'City': 'City', 'Zip': 'Zip', 'Land Value': 'Land Value', });
lyr_NevadaCountyBoundary_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_SuitableArea_2.set('fieldImages', {'APN': 'TextEdit', 'Acres': 'TextEdit', });
lyr_ParcelBoundary_3.set('fieldImages', {'APN': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'Zip': 'TextEdit', 'Land Value': 'Range', });
lyr_NevadaCountyBoundary_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_SuitableArea_2.set('fieldLabels', {'APN': 'header label', 'Acres': 'header label', });
lyr_ParcelBoundary_3.set('fieldLabels', {'APN': 'header label', 'Address': 'header label', 'City': 'header label', 'Zip': 'header label', 'Land Value': 'header label', });
lyr_ParcelBoundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});