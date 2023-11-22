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
lyr_SuitableArea_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'APN': 'APN', 'APNSeven': 'APNSeven', 'MailingAdd': 'MailingAdd', 'MailingCit': 'MailingCit', 'MailingZip': 'MailingZip', 'Acreage': 'Acreage', 'Acres': 'Acres', });
lyr_ParcelBoundary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'APNx': 'APNx', 'APN': 'APN', 'LastParcel': 'LastParcel', 'Status': 'Status', 'TaxAreaCod': 'TaxAreaCod', 'Address': 'Address', 'City': 'City', 'Zip': 'Zip', 'RollYear': 'RollYear', 'Land Value': 'Land Value', 'TotalImpro': 'TotalImpro', 'BusinessPe': 'BusinessPe', 'BusinessFi': 'BusinessFi', 'ExemptionC': 'ExemptionC', 'ExemptionV': 'ExemptionV', 'GrossRollV': 'GrossRollV', 'NetRollVal': 'NetRollVal', 'UseCode': 'UseCode', 'LegalDescr': 'LegalDescr', 'ZONING': 'ZONING', 'GPDES': 'GPDES', 'SANDIST': 'SANDIST', 'SUPDIST': 'SUPDIST', 'FIREDIST': 'FIREDIST', 'CENTRACT': 'CENTRACT', 'CENBLKGP': 'CENBLKGP', 'MINFT': 'MINFT', 'MAXFT': 'MAXFT', 'RANGEFT': 'RANGEFT', 'SL_ZONE': 'SL_ZONE', 'TL_DIST': 'TL_DIST', 'SNOWLOAD': 'SNOWLOAD', 'CL_ZONE': 'CL_ZONE', 'W_EXP': 'W_EXP', 'ELEM': 'ELEM', 'MINERAL': 'MINERAL', 'COMBNDRY': 'COMBNDRY', 'ZDM': 'ZDM', 'GISACRES': 'GISACRES', 'REPORT_URL': 'REPORT_URL', 'JURISDICTI': 'JURISDICTI', 'WATER_DIST': 'WATER_DIST', 'NID_DIST': 'NID_DIST', 'PUBLIC_UTI': 'PUBLIC_UTI', 'PARK_DIST': 'PARK_DIST', 'SENATE_DIS': 'SENATE_DIS', 'STATE_ASSE': 'STATE_ASSE', 'CONGRESS_D': 'CONGRESS_D', 'PRECINCT': 'PRECINCT', 'SERVICE_AR': 'SERVICE_AR', 'Acreage': 'Acreage', 'SquareFeet': 'SquareFeet', 'Floor1Squa': 'Floor1Squa', 'Floor2Desc': 'Floor2Desc', 'Floor2Squa': 'Floor2Squa', 'BasementDe': 'BasementDe', 'BasementSq': 'BasementSq', 'VehicleBui': 'VehicleBui', 'VehicleB_1': 'VehicleB_1', 'HasPorch': 'HasPorch', 'PorchSquar': 'PorchSquar', 'Improvemen': 'Improvemen', 'Improvem_1': 'Improvem_1', 'HasGuestHo': 'HasGuestHo', 'GuestHouse': 'GuestHouse', 'YearBuilt': 'YearBuilt', 'TotalUnits': 'TotalUnits', 'Stories': 'Stories', 'Bedrooms': 'Bedrooms', 'Baths': 'Baths', 'Rooms': 'Rooms', 'Temperatur': 'Temperatur', 'PoolSpa': 'PoolSpa', 'PhysicalAc': 'PhysicalAc', 'RoadSurfac': 'RoadSurfac', 'HasSewer': 'HasSewer', 'WaterSourc': 'WaterSourc', 'Topography': 'Topography', 'AreaView': 'AreaView', 'Frontage': 'Frontage', 'GroundCove': 'GroundCove', 'Fireplaces': 'Fireplaces', });
lyr_NevadaCountyBoundary_1.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_SuitableArea_2.set('fieldImages', {'OBJECTID': '', 'APN': '', 'APNSeven': '', 'MailingAdd': '', 'MailingCit': '', 'MailingZip': '', 'Acreage': '', 'Acres': '', });
lyr_ParcelBoundary_3.set('fieldImages', {'OBJECTID': 'Range', 'APNx': '', 'APN': '', 'LastParcel': 'DateTime', 'Status': 'TextEdit', 'TaxAreaCod': 'TextEdit', 'Address': '', 'City': '', 'Zip': '', 'RollYear': 'TextEdit', 'Land Value': '', 'TotalImpro': 'Range', 'BusinessPe': 'Range', 'BusinessFi': 'Range', 'ExemptionC': 'TextEdit', 'ExemptionV': 'Range', 'GrossRollV': 'Range', 'NetRollVal': 'Range', 'UseCode': 'TextEdit', 'LegalDescr': 'TextEdit', 'ZONING': 'TextEdit', 'GPDES': 'TextEdit', 'SANDIST': 'TextEdit', 'SUPDIST': 'Range', 'FIREDIST': 'TextEdit', 'CENTRACT': 'TextEdit', 'CENBLKGP': 'TextEdit', 'MINFT': 'Range', 'MAXFT': 'Range', 'RANGEFT': 'Range', 'SL_ZONE': 'TextEdit', 'TL_DIST': 'TextEdit', 'SNOWLOAD': 'TextEdit', 'CL_ZONE': 'TextEdit', 'W_EXP': 'TextEdit', 'ELEM': 'TextEdit', 'MINERAL': 'TextEdit', 'COMBNDRY': 'TextEdit', 'ZDM': 'TextEdit', 'GISACRES': 'TextEdit', 'REPORT_URL': 'TextEdit', 'JURISDICTI': 'TextEdit', 'WATER_DIST': 'TextEdit', 'NID_DIST': 'TextEdit', 'PUBLIC_UTI': 'TextEdit', 'PARK_DIST': 'TextEdit', 'SENATE_DIS': 'Range', 'STATE_ASSE': 'Range', 'CONGRESS_D': 'TextEdit', 'PRECINCT': 'TextEdit', 'SERVICE_AR': 'TextEdit', 'Acreage': 'TextEdit', 'SquareFeet': 'Range', 'Floor1Squa': 'TextEdit', 'Floor2Desc': 'TextEdit', 'Floor2Squa': 'TextEdit', 'BasementDe': 'TextEdit', 'BasementSq': 'TextEdit', 'VehicleBui': 'TextEdit', 'VehicleB_1': 'Range', 'HasPorch': 'TextEdit', 'PorchSquar': 'Range', 'Improvemen': 'TextEdit', 'Improvem_1': 'TextEdit', 'HasGuestHo': 'TextEdit', 'GuestHouse': 'Range', 'YearBuilt': 'TextEdit', 'TotalUnits': 'Range', 'Stories': 'Range', 'Bedrooms': 'Range', 'Baths': 'TextEdit', 'Rooms': 'Range', 'Temperatur': 'TextEdit', 'PoolSpa': 'TextEdit', 'PhysicalAc': 'TextEdit', 'RoadSurfac': 'TextEdit', 'HasSewer': 'TextEdit', 'WaterSourc': 'TextEdit', 'Topography': 'TextEdit', 'AreaView': 'TextEdit', 'Frontage': 'TextEdit', 'GroundCove': 'TextEdit', 'Fireplaces': 'TextEdit', });
lyr_NevadaCountyBoundary_1.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_SuitableArea_2.set('fieldLabels', {'OBJECTID': 'no label', 'APN': 'no label', 'APNSeven': 'no label', 'MailingAdd': 'no label', 'MailingCit': 'no label', 'MailingZip': 'no label', 'Acreage': 'no label', 'Acres': 'no label', });
lyr_ParcelBoundary_3.set('fieldLabels', {'OBJECTID': 'no label', 'APNx': 'no label', 'APN': 'no label', 'LastParcel': 'no label', 'Status': 'no label', 'TaxAreaCod': 'no label', 'Address': 'no label', 'City': 'no label', 'Zip': 'no label', 'RollYear': 'no label', 'Land Value': 'no label', 'TotalImpro': 'no label', 'BusinessPe': 'no label', 'BusinessFi': 'no label', 'ExemptionC': 'no label', 'ExemptionV': 'no label', 'GrossRollV': 'no label', 'NetRollVal': 'no label', 'UseCode': 'no label', 'LegalDescr': 'no label', 'ZONING': 'no label', 'GPDES': 'no label', 'SANDIST': 'no label', 'SUPDIST': 'no label', 'FIREDIST': 'no label', 'CENTRACT': 'no label', 'CENBLKGP': 'no label', 'MINFT': 'no label', 'MAXFT': 'no label', 'RANGEFT': 'no label', 'SL_ZONE': 'no label', 'TL_DIST': 'no label', 'SNOWLOAD': 'no label', 'CL_ZONE': 'no label', 'W_EXP': 'no label', 'ELEM': 'no label', 'MINERAL': 'no label', 'COMBNDRY': 'no label', 'ZDM': 'no label', 'GISACRES': 'no label', 'REPORT_URL': 'no label', 'JURISDICTI': 'no label', 'WATER_DIST': 'no label', 'NID_DIST': 'no label', 'PUBLIC_UTI': 'no label', 'PARK_DIST': 'no label', 'SENATE_DIS': 'no label', 'STATE_ASSE': 'no label', 'CONGRESS_D': 'no label', 'PRECINCT': 'no label', 'SERVICE_AR': 'no label', 'Acreage': 'no label', 'SquareFeet': 'no label', 'Floor1Squa': 'no label', 'Floor2Desc': 'no label', 'Floor2Squa': 'no label', 'BasementDe': 'no label', 'BasementSq': 'no label', 'VehicleBui': 'no label', 'VehicleB_1': 'no label', 'HasPorch': 'no label', 'PorchSquar': 'no label', 'Improvemen': 'no label', 'Improvem_1': 'no label', 'HasGuestHo': 'no label', 'GuestHouse': 'no label', 'YearBuilt': 'no label', 'TotalUnits': 'no label', 'Stories': 'no label', 'Bedrooms': 'no label', 'Baths': 'no label', 'Rooms': 'no label', 'Temperatur': 'no label', 'PoolSpa': 'no label', 'PhysicalAc': 'no label', 'RoadSurfac': 'no label', 'HasSewer': 'no label', 'WaterSourc': 'no label', 'Topography': 'no label', 'AreaView': 'no label', 'Frontage': 'no label', 'GroundCove': 'no label', 'Fireplaces': 'no label', });
lyr_ParcelBoundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});