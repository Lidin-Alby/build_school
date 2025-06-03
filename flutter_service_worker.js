'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ae3f7bf648946f55074224ba11a9c9e5",
".git/config": "af881f10b8d66fb12d83a539fc94c108",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c3ba84b70df4434b05e8c874c209113a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ece8b436701f984286d97e77ca24c182",
".git/logs/refs/heads/main": "0ad574d5b5ff7e4282f1bcf2fbfb8dd4",
".git/logs/refs/remotes/origin/main": "184dd69db6402fc54fe2aa64e3fb5157",
".git/objects/10/4a4cf0cfda845d5039aecb49d3def53b8d0692": "741dbcac466ffddc738d2148eb3025ca",
".git/objects/14/c0f7a56147d65a31ed5edcd523e006bdedd069": "3e1f954a88d28abaed3c0c94f5deccc7",
".git/objects/1a/785d3e96585469aeffe75f237808a3496b26b2": "9625654e951a0c53d211af924f4bbe37",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/22/5470d447895b8de738fa9c45890e5303f46e73": "bbdb148bf10446406824a69f56fa2682",
".git/objects/2a/7158d5ed184cf56c1c2cc9a16f085a9b2c6858": "186cea3833964e5231375efa628dea76",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/e61b993881c6516f41663f39c3b4d25bedb177": "7ecf7faaaa0239ca110e05a9122b42be",
".git/objects/3a/9f7263200889a05bd113c5955058bcbf37dba2": "d1e29f2e5e7cd526d35a5f90a1c18d39",
".git/objects/3d/ee9ca386aac534ec40a4bdaa58b1aab9d56504": "9be3f453ef2c1d56090f5622ae0c43fc",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/3b4d4e955771f593a5337161b06dfcafc4a999": "d90b35d6aac3fc69ab12f618bb5f2023",
".git/objects/44/29fc791b5b0bac4a6e46a00e696a4b767633a1": "c22998c0b7ccf5692e4754297163766a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c9ff08972d787ec313fa1c3ef082ec134a607b": "c2f909f63c4d1a6dc4b2b3b5bde01ef1",
".git/objects/49/1d7221148f60b757c1212ad98dab0a6b1dd975": "8bf770f774dd1b05527bf329a9ad3eb0",
".git/objects/4c/f68ced75812090bfd8dab1e1168d9ed3ae980f": "c98962993b0e8abf859fa008cd751238",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/55/60ee2122a9442c8137c3164f64ffc51552c3a8": "3fa9b53bf1783019b4629da1b3270080",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/58/de020ee016248c9294be1af64d954aff034a53": "244a6c7df6354f199a2a916d0b0149ee",
".git/objects/5b/0673995b84d7e5772ed188a9f7a4b936faba54": "7e1fb8e5747848dc9389f5149c443be9",
".git/objects/5f/1bf9e341f22ffaaea453de94b04bef0fc292a6": "c8fcae684d5a87a23680c075059dd16c",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/6091af00bc35549c0684db9dd193ff246d92c1": "9098459a5b00794f1ed897c4575970c8",
".git/objects/64/b70a5001c68bc32245c7497e9abaff610c9dc2": "79c430f9c0a3de9c971e17f91fb7692b",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/996f51e015ed6fd75d6ae19f209b5bef9d9a1f": "79d42c9f8b1af50e88174a0c5688d606",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/75/3fe5e438119f70bc49d712880cdf594250e248": "590a7a39bd4aef70856b0195ef73b40d",
".git/objects/78/2ccd4ff4b4470e30aef24c51a80336e871fdce": "d7738e38b74eba688cb373b13f8aeb61",
".git/objects/79/c89bd05042bd4fde1833f5e1d2a8881cca5947": "dfb4e93f6157e7948017dd717f09239b",
".git/objects/7f/7eb5e36c2e31daeec90491e2f286a312e61141": "c092575c21d3973f3342ac364298dc27",
".git/objects/85/f99b4cdb81a095978ed1bd2323755946415a3b": "576dded25e2c6b14ef0cff373fd0d8b3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f0bac02fd7178166dae5fae05c67abd03454e5": "d7fad4fd9aad55733b4714e6ef1557bb",
".git/objects/8e/d253a7f0d13978413c47a48e6853b01959bd0f": "246d285b1bcc0fa87c2d6ef1eaaa4432",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/90/dd295eda2dfa946da687c5efa1105f1707bb74": "fc93d1b6fa6a7de2f8c1f18c658dbd15",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/1276f1a6619ebe3848271aa43338e883498536": "1e130fed6a80c9b51b1e7632b06c00e0",
".git/objects/9d/6741b9c57b7cc6101edb99fabc6dc8eeececcf": "01d413faa2058aadeec24ae949d69ce7",
".git/objects/9f/7d8e3abf18e7d600b1b43c886d48ec609e91c6": "062736c72a02c3fc3016c16e41c55155",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/8241a73a37887bb7ee73ecec2973329f6bec31": "b5411f975ff308109fed947446828d1f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/b497ed2cf4b1e53f73dabca9d01345cdac78e1": "0c1423409c8cc7689f42b107a1318d77",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/5f15ff12d1978ff9df231983c4df13df519a4c": "c7d81ea53d28d6cef44332815a04f314",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e1/6ed5ffc264c66969fff98c34e470abc1691479": "b7c40ab5d14aef9fbb8288b2d05e4ffc",
".git/objects/e3/5c94a4d9a94540fae496c01dbb91d3ed31ed12": "952b5f15c7afa53a7351292c7e724341",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/f8affc0a22903bf2d5cdd1f480c794b1ea6ce9": "d384019f6a429d48c279df0c825f1d07",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7baa4a3cad4d1137dd0d86ab0afe85933a0c8a": "52e9e738d28a6a3ec9edd70421e40c21",
".git/objects/ed/aaa9103467350aed2b2676284fb18b617e84b4": "24427ee7762a062dec8e7261892480d6",
".git/objects/ee/63be41053efb78f8d3a46b8dce93bc39a25dd9": "18d9873f57b28424a84c662da47fa53a",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ee/a9aa158449133d9ea35de282527109d028e2f1": "b53645881add6344eba4e919060a2c36",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/01dab6df81d9aab3bc356d699d93add163c4d1": "55aec691ed8fda2568e5de6a416077e1",
".git/objects/fc/31632ce7d5f3ec883d87e11c989422306e7d95": "06741687e801c4639f83ebc895bc4703",
".git/objects/fc/3828967fff5a01a34973f4d485b84013e51d39": "82b90b97faa2adc2c4c471ff1b7cd139",
".git/refs/heads/main": "44564aaf72ef37e572f884d695a26ad8",
".git/refs/remotes/origin/main": "44564aaf72ef37e572f884d695a26ad8",
"assets/AssetManifest.bin": "fb32869c383bb14744bf1dd8f1b30ff3",
"assets/AssetManifest.bin.json": "d502790dcee8e044d0caae441cc1007b",
"assets/AssetManifest.json": "072eb8d816368ee603e405a4686c7d17",
"assets/assets/circle.png": "e0a898cc1293a76e8c006c110c3db8ef",
"assets/assets/image_asset.jpg": "4a61f8fe3fec9c2a2a6de086936175d3",
"assets/assets/profile.jpg": "5b054545af7cf1bf1634cbbd64ec99f3",
"assets/assets/square.png": "786dafb1bd6cc756425766e2b382c35e",
"assets/assets/star.png": "5e812677aa9269c07378011fd44a4537",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "213321aa2ca2301dbf873af9710c71bc",
"assets/NOTICES": "00ce24525e13fd2fd4f232eef777b0d8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/widgets_easier/assets/icons/close.png": "b1b0aaf9bb03fe64623eff1b17414551",
"assets/packages/widgets_easier/assets/icons/confirm.png": "7526857cf0f7b23c74067a40e193d470",
"assets/packages/widgets_easier/assets/icons/error.png": "1e7b4a7913e652690bfc052c5e43897a",
"assets/packages/widgets_easier/assets/icons/info.png": "5c41a5f3d1d5bd2b19b4d987449ea02e",
"assets/packages/widgets_easier/assets/icons/prohibit.png": "c98f12affdacece42f31cb2450fab3ad",
"assets/packages/widgets_easier/assets/icons/right.png": "fd7a154dd96f9286d067fac5946915da",
"assets/packages/widgets_easier/assets/icons/search.png": "a1ae8b4287c395a375d1ecbfadb55657",
"assets/packages/widgets_easier/assets/icons/success.png": "bb79c1cd592d6e82bebe82862b9c81bd",
"assets/packages/widgets_easier/assets/icons/warning.png": "acfad8e29b74cf4e61970796c1c582c3",
"assets/packages/widgets_easier/assets/images/image_loading_failed.png": "98937b7663b1aea554f3007250c9ce82",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "205887d531a49ede214a07afc5bd6c33",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a54b64e04dd5ef32738f60a2a1cf73fc",
"/": "a54b64e04dd5ef32738f60a2a1cf73fc",
"main.dart.js": "db5f3fdae68dbc372cd85191bd367fe2",
"manifest.json": "a86d7cf2ba3dca9d48fa4cb7802a4ad1",
"README.md": "09db431299e915cf44403eb719e9a895",
"version.json": "230b47caf1b9b3ba06505099eeb4846f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
