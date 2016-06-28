"use strict";

exports.__esModule = true;
exports.default = {
  "IrsConstants": {
    "HOMEPAGE": "Homepage",
    "PRODUCT": "Product",
    "PRODUCT_BTV": "ProductBtv",
    "PRODUCT_CATEGORY": "ProductCategory",
    "PRODUCT_AJAX": "ProductAjax",
    "COLLECTION": "Collection",
    "CONTINUE_SHOPPING": "ContinueShopping",
    "BUNDLE": "Bundle",
    "PAC": "Pac",
    "PAR": "Par",
    "CART": "Cart",
    "CHECKOUT": "Checkout",
    "SEARCH": "Search",
    "BROWSE": "Browse",
    "CATEGORY": "Category",
    "ONEHG": "OneHg",
    "STOREFINDER": "StoreFinder",
    "VOD": "Vod",
    "VOD_MIDDLE": "VodMiddle",
    "VOD_TEMPO": "VodTempo",
    "REVIEW_MIDDLE": "ReviewMiddle",
    "REVIEW_RVI": "Review",
    "HOLIDEAL": "Holideal",
    "HOLIDEAL_SIMILAR": "HolidealSimilar",
    "BLACKFRIDAY_ALL": "BlackFridayAll",
    "BLACKFRIDAY_CATEGORY": "BlackFridayCategory",
    "METADATA": "Metadata",
    "HP_METADATA_RVI": "HpMetadataRvi",
    "PRODUCT_METADATA_RVI": "ProductMetadataRvi",
    "SCROLLING": "Scrolling",
    "EMPTY": "Empty",
    "SUCCESS": 0,
    "SUCCESS_WITH_ERRORS": 1,
    "SUCCESS_PARTIAL_RESTULTS": 2,
    "NOT_AVAILABLE": "NOT_AVAILABLE",
    "MODULE_LIST": "moduleList",
    "VERSION": "version",
    "CODE": "code",
    "STATUS": "status",
    "RESULT": "result",
    "RESULT_DETAIL": "resultDetail",
    "VERSION_3_0": "3.0",
    "VERSION_2_0": "2.0",
    "DEFAULT_VERSION": "VERSION_3_0",
    "SERVER_GUID": "serverGuid",
    "CLIENT_GUID": "clientGuid",
    "BUCKET_ID": "bucketId",
    "CONFIG_ID": "configId",
    "PLACEMENT_ID": "placementId",
    "MODULE_TITLE": "moduleTitle",
    "PARENT_ITEM_INCLUDED": "parentItemIncluded",
    "RECOMMENDED_ITEMS": "recommendedItems",
    "RECOMMENDED_ENTITIES": "recommendedEntities",
    "PARENT_ITEM": "parentItem",
    "PARENT_ENTITIES": "parentEntities",
    "US_ITEM_ID": "usItemId",
    "STRATEGY": "strategy",
    "HTML_TEMPLATE_ID": "htmlTemplateId",
    "HTML_TEMPLATE_CONTEXT": "htmlTemplateContext",
    "FACET": "facet",
    "DEPT": "dept",
    "THUMBS": "thumbs",
    "QUICKLOOK_ENABLED": "quickLookEnabled",
    "MARKET_ID": "market_id",
    "MARKET_DEFAULT": "01",
    "PRODUCT_ID_CONTEXT": "productId",
    "REMAINING_ID_CONTEXT": "remainingEntities",
    "TOTAL_ITEMS": "totalItems",
    "VISITOR_ID_CONTEXT": "visitorId",
    "CUSTOMER_ID_CONTEXT": "customerId",
    "TO_SHIPPING_THRESHOLD": "toShippingThreshold",
    "SEM": "sem",
    "BEACON_VERSION": "1.0.1",
    "IRS_COOKIES": "irsCookies",
    "COOKIE_FLAG": "irsCookieFlag",
    "DEVICE_TYPE": "deviceType",
    "SEM_SEARCH_STRING": "veh=sem",
    "SHIPPING_PASS_LEVEL": "shippingPassLevel",
    "SHIPPING_PASS_ELIGIBLE": "shippingPassEligible",
    "SUBMAP_ITEM": "ITEM",
    "SUBMAP_CART": "CART",
    "SUBMAP_CHECKOUT": "CHECKOUT",
    "SHOW_SHIPPING_PASS": "showShippingPass",
    "CACHE_PIPELINE": "cachePipeline",
    "BTV_GROUP_ID": "groupId",
    "BTV_PLACEMENTS": "btvPlacements",
    "IS_BTV_MODULE": "btvModule",
    "HAS_BTV_MODULE": "hasBtvModule",
    "PLACEMENT_M3": "m3",
    "KEY": "key",
    "MAX_THUMBS": "irs.maxThumbs"
  },
  "IrsConfigNames": {
    "DEFAULT_ENV": "stg",
    "IRS_CONFIG": "irsConfig",
    "WILD_CARD_MODULE_ID": "*",
    "IRS_URL_NAME": "irs.serverUrl",
    "IRS_METADATA_URL_NAME": "irs.metadataUrl",
    "IRS_ACTION_BUTTON_NAME": "irs.actionButton",
    "IRS_HOMEPAGE_CONFIG_NAME": "irs.homepageConfig",
    "IRS_PRODUCT_CONFIG_NAME": "irs.productConfig",
    "IRS_PRODUCT_BTV_CONFIG_NAME": "irs.productBtvConfig",
    "IRS_PRODUCT_CATEGORY_CONFIG_NAME": "irs.categoryRviConfig",
    "Category": "irs.categoryRviConfig",
    "IRS_PRODUCT_SEM_CONFIG_NAME": "irs.productSemConfig",
    "IRS_BUNDLE_CONFIG_NAME": "irs.bundleConfig",
    "IRS_PAC_CONFIG_NAME": "irs.pacConfig",
    "IRS_PAR_CONFIG_NAME": "irs.parConfig",
    "IRS_CART_CONFIG_NAME": "irs.cartConfig",
    "IRS_CHECKOUT_CONFIG_NAME": "irs.checkoutConfig",
    "IRS_SEARCH_CONFIG_NAME": "irs.searchConfig",
    "IRS_BROWSE_CONFIG_NAME": "irs.browseConfig",
    "IRS_CATEGORY_CONFIG_NAME": "irs.categoryConfig",
    "IRS_ONEHG_CONFIG_NAME": "irs.onehgConfig",
    "IRS_VOD_MIDDLE_CONFIG_NAME": "irs.vodMiddleConfig",
    "IRS_VOD_CONFIG_NAME": "irs.vodConfig",
    "IRS_VOD_TEMPO_CONFIG_NAME": "irs.vodTempoConfig",
    "IRS_HOLIDEAL_CONFIG_NAME": "irs.holidealConfig",
    "IRS_HOLIDEAL_SIMILAR_CONFIG_NAME": "irs.holidealSimilarConfig",
    "IRS_BLACKFRIDAY_ALL_CONFIG_NAME": "irs.blackfridayAllConfig",
    "IRS_BLACKFRIDAY_CATEGORY_CONFIG_NAME": "irs.blackfridayCategoryConfig",
    "IRS_BLACKFRIDAY_ALLDEPT_NAME": "irs.blackfridayAllDept",
    "IRS_REVIEW_MIDDLE_CONFIG_NAME": "irs.reviewMiddleConfig",
    "IRS_REVIEW_RVI_CONFIG_NAME": "irs.reviewRviConfig",
    "IRS_METADATA_CONFIG_NAME": "irs.metadataConfig",
    "IRS_HP_METADATA_RVI_CONFIG_NAME": "irs.hpMetadataRviConfig",
    "IRS_PRODUCT_METADATA_RVI_CONFIG_NAME": "irs.productMetadataRviConfig",
    "IRS_STOREFINDER_CONFIG_NAME": "irs.storefinderConfig",
    "IRS_COLLECTION_CONFIG_NAME": "irs.collectionConfig",
    "IRS_CONTINUE_SHOPPING_CONFIG_NAME": "irs.continueShoppingConfig",
    "IRS_DISABLE_MODULES_ON_PAGE_NAME": "irs.disableModulesOnPage",
    "IRS_ALLOWED_CATEGORY_NAME": "irs.allowedCategory",
    "IRS_AJAX_MODULES_NAME": "irs.ajaxModules",
    "IRS_AJAX_FALLBACK_NAME": "irs.ajaxFallback",
    "IRS_ENABLE_AB_TEST_NAME": "irs.enableABTest",
    "IRS_SHOW_SHIPPING_PASS_NAME": "irs.showShippingPass",
    "IRS_VOD_ZONE_MAP_NAME": "irs.vodZoneMap",
    "IRS_MARKET_CONFIG_NAME": "irs.marketConfig",
    "IRS_COOKIE_ENTRIES_NAME": "irs.cookieEntries",
    "IRS_COOKIE_FLAG": "irs.cookieFlag",
    "IRS_SHOW_THUMB_NAME": "irs.showThumb",
    "MAX_THUMBS": "irs.maxThumbs",
    "IRS_PLACEMENT_META_NAME": "irs.placementMeta",
    "IRS_AJAX_EXPO_MODULES_NAME": "irs.ajaxExpoModules",
    "IRS_MAX_CONNECTION_PER_ROUTE_NAME": "irs.maxPerRoute",
    "IRS_MAX_CONNECTION_TOTAL_NAME": "irs.maxTotal",
    "IRS_CLOSED_IDLE_CONNECTION_SECONDS_NAME": "irs.closedIdleConnectionSeconds",
    "IRS_KEEP_ALIVE_SECONDS_NAME": "irs.keepAliveSeconds",
    "IRS_HTTP_SOCKETTIMEOUT_NAME": "irs.socketTimeout",
    "IRS_HTTP_CONNTIMEOUT_NAME": "irs.connTimeout",
    "IRS_HTTP_CONNREQUESTTIMEOUT_NAME": "irs.connRequestTimeout",
    "IRS_HTTP_ENABLECOMPRESSEDRESP_NAME": "irs.enableCompression",
    "IRS_ENABLE_SERVER_SIDE_RENDERING_NAME": "irs.enableServerSideRendering",
    "IRS_ENABLE_ITEM_PAGE_VERY_TOP_MODULE_NAME": "irs.enableItemPageVeryTopModule",
    "IRS_REACT_PAGES": "irs.reactPages",
    "Upsell": "irs.upsellConfig",
    "Cart": "irs.cartConfig",
    "Search": "irs.searchConfig",
    "Browse": "irs.browseConfig"
  }
};