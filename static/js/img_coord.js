// The keys of this dictionary represent the region key used for a NOHRSC picture. 
// The values are a list of 2 tuples. Each tuple is a (lat,long) pair. 
// The first tuple is the bottom left corner of where the image should be mounted on the map. 
// The 2nd tuple is the upper right corner of where the image should be mounted on the map. 

var img_coord = {
    'R001C001' : [[49.6999999999999, -126.249999999999], [53.9666666666664, -121.983333333333]],
    'R001C002' : [[49.6999999999999, -121.983333333332], [53.9666666666664, -117.716666666666]],
    'R001C003' : [[49.6999999999999, -117.716666666666], [53.9666666666664, -113.45]],
    'R001C004' : [[49.6999999999999, -113.449999999999], [53.9666666666664, -109.183333333333]],
    'R001C005' : [[49.6999999999999, -109.183333333332], [53.9666666666664, -104.916666666666]],
    'R001C006' : [[49.6999999999999, -104.916666666666], [53.9666666666664, -100.65]],
    'R001C007' : [[49.6999999999999, -100.649999999999], [53.9666666666664, -96.3833333333331]],
    'R001C008' : [[49.6999999999999, -96.3833333333329], [53.9666666666664, -92.1166666666664]],
    'R001C009' : [[49.6999999999999, -92.1166666666663], [53.9666666666664, -87.8499999999998]],
    'R001C010' : [[49.6999999999999, -87.8499999999996], [53.9666666666664, -83.5833333333331]],
    'R001C011' : [[49.6999999999999, -83.5833333333329], [53.9666666666664, -79.3166666666664]],
    'R001C012' : [[49.6999999999999, -79.3166666666662], [53.9666666666664, -75.0499999999997]],
    'R001C013' : [[49.6999999999999, -75.0499999999996], [53.9666666666664, -70.7833333333331]],
    'R001C014' : [[49.6999999999999, -70.7833333333329], [53.9666666666664, -66.5166666666664]],
    'R001C015' : [[49.6999999999999, -66.5166666666662], [53.9666666666664, -62.2499999999997]],
    'R002C001' : [[45.4333333333333, -126.249999999999], [49.6999999999998, -121.983333333333]],
    'R002C002' : [[45.4333333333333, -121.983333333332], [49.6999999999998, -117.716666666666]],
    'R002C003' : [[45.4333333333333, -117.716666666666], [49.6999999999998, -113.45]],
    'R002C004' : [[45.4333333333333, -113.449999999999], [49.6999999999998, -109.183333333333]],
    'R002C005' : [[45.4333333333333, -109.183333333332], [49.6999999999998, -104.916666666666]],
    'R002C006' : [[45.4333333333333, -104.916666666666], [49.6999999999998, -100.65]],
    'R002C007' : [[45.4333333333333, -100.649999999999], [49.6999999999998, -96.3833333333331]],
    'R002C008' : [[45.4333333333333, -96.3833333333329], [49.6999999999998, -92.1166666666664]],
    'R002C009' : [[45.4333333333333, -92.1166666666663], [49.6999999999998, -87.8499999999998]],
    'R002C010' : [[45.4333333333333, -87.8499999999996], [49.6999999999998, -83.5833333333331]],
    'R002C011' : [[45.4333333333333, -83.5833333333329], [49.6999999999998, -79.3166666666664]],
    'R002C012' : [[45.4333333333333, -79.3166666666662], [49.6999999999998, -75.0499999999997]],
    'R002C013' : [[45.4333333333333, -75.0499999999996], [49.6999999999998, -70.7833333333331]],
    'R002C014' : [[45.4333333333333, -70.7833333333329], [49.6999999999998, -66.5166666666664]],
    'R002C015' : [[45.4333333333333, -66.5166666666662], [49.6999999999998, -62.2499999999997]],
    'R003C001' : [[41.1666666666666, -126.249999999999], [45.4333333333331, -121.983333333333]],
    'R003C002' : [[41.1666666666666, -121.983333333332], [45.4333333333331, -117.716666666666]],
    'R003C003' : [[41.1666666666666, -117.716666666666], [45.4333333333331, -113.45]],
    'R003C004' : [[41.1666666666666, -113.449999999999], [45.4333333333331, -109.183333333333]],
    'R003C005' : [[41.1666666666666, -109.183333333332], [45.4333333333331, -104.916666666666]],
    'R003C006' : [[41.1666666666666, -104.916666666666], [45.4333333333331, -100.65]],
    'R003C007' : [[41.1666666666666, -100.649999999999], [45.4333333333331, -96.3833333333331]],
    'R003C008' : [[41.1666666666666, -96.3833333333329], [45.4333333333331, -92.1166666666664]],
    'R003C009' : [[41.1666666666666, -92.1166666666663], [45.4333333333331, -87.8499999999998]],
    'R003C010' : [[41.1666666666666, -87.8499999999996], [45.4333333333331, -83.5833333333331]],
    'R003C011' : [[41.1666666666666, -83.5833333333329], [45.4333333333331, -79.3166666666664]],
    'R003C012' : [[41.1666666666666, -79.3166666666662], [45.4333333333331, -75.0499999999997]],
    'R003C013' : [[41.1666666666666, -75.0499999999996], [45.4333333333331, -70.7833333333331]],
    'R003C014' : [[41.1666666666666, -70.7833333333329], [45.4333333333331, -66.5166666666664]],
    'R003C015' : [[41.1666666666666, -66.5166666666662], [45.4333333333331, -62.2499999999997]],
    'R004C001' : [[36.8999999999999, -126.249999999999], [41.1666666666664, -121.983333333333]],
    'R004C002' : [[36.8999999999999, -121.983333333332], [41.1666666666664, -117.716666666666]],
    'R004C003' : [[36.8999999999999, -117.716666666666], [41.1666666666664, -113.45]],
    'R004C004' : [[36.8999999999999, -113.449999999999], [41.1666666666664, -109.183333333333]],
    'R004C005' : [[36.8999999999999, -109.183333333332], [41.1666666666664, -104.916666666666]],
    'R004C006' : [[36.8999999999999, -104.916666666666], [41.1666666666664, -100.65]],
    'R004C007' : [[36.8999999999999, -100.649999999999], [41.1666666666664, -96.3833333333331]],
    'R004C008' : [[36.8999999999999, -96.3833333333329], [41.1666666666664, -92.1166666666664]],
    'R004C009' : [[36.8999999999999, -92.1166666666663], [41.1666666666664, -87.8499999999998]],
    'R004C010' : [[36.8999999999999, -87.8499999999996], [41.1666666666664, -83.5833333333331]],
    'R004C011' : [[36.8999999999999, -83.5833333333329], [41.1666666666664, -79.3166666666664]],
    'R004C012' : [[36.8999999999999, -79.3166666666662], [41.1666666666664, -75.0499999999997]],
    'R004C013' : [[36.8999999999999, -75.0499999999996], [41.1666666666664, -70.7833333333331]],
    'R005C002' : [[32.6333333333332, -121.983333333332], [36.8999999999997, -117.716666666666]],
    'R005C003' : [[32.6333333333332, -117.716666666666], [36.8999999999997, -113.45]],
    'R005C004' : [[32.6333333333332, -113.449999999999], [36.8999999999997, -109.183333333333]],
    'R005C005' : [[32.6333333333332, -109.183333333332], [36.8999999999997, -104.916666666666]],
    'R005C006' : [[32.6333333333332, -104.916666666666], [36.8999999999997, -100.65]],
    'R005C007' : [[32.6333333333332, -100.649999999999], [36.8999999999997, -96.3833333333331]],
    'R005C008' : [[32.6333333333332, -96.3833333333329], [36.8999999999997, -92.1166666666664]],
    'R005C009' : [[32.6333333333332, -92.1166666666663], [36.8999999999997, -87.8499999999998]],
    'R005C010' : [[32.6333333333332, -87.8499999999996], [36.8999999999997, -83.5833333333331]],
    'R005C011' : [[32.6333333333332, -83.5833333333329], [36.8999999999997, -79.3166666666664]],
    'R005C012' : [[32.6333333333332, -79.3166666666662], [36.8999999999997, -75.0499999999997]],
    'R006C003' : [[28.3666666666666, -117.716666666666], [32.6333333333331, -113.45]],
    'R006C004' : [[28.3666666666666, -113.449999999999], [32.6333333333331, -109.183333333333]],
    'R006C005' : [[28.3666666666666, -109.183333333332], [32.6333333333331, -104.916666666666]],
    'R006C006' : [[28.3666666666666, -104.916666666666], [32.6333333333331, -100.65]],
    'R006C007' : [[28.3666666666666, -100.649999999999], [32.6333333333331, -96.3833333333331]],
    'R006C008' : [[28.3666666666666, -96.3833333333329], [32.6333333333331, -92.1166666666664]],
    'R006C009' : [[28.3666666666666, -92.1166666666663], [32.6333333333331, -87.8499999999998]],
    'R006C010' : [[28.3666666666666, -87.8499999999996], [32.6333333333331, -83.5833333333331]],
    'R006C011' : [[28.3666666666666, -83.5833333333329], [32.6333333333331, -79.3166666666664]],
    'R007C007' : [[24.0999999999999, -100.649999999999], [28.3666666666664, -96.3833333333331]],
    'R007C011' : [[24.0999999999999, -83.5833333333329], [28.3666666666664, -79.3166666666664]]
    }