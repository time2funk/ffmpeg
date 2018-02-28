
var ffmpeg = require('fluent-ffmpeg');
var timer = new Date().getTime();
var timer_step = 0;
var x = 1;


// var src = "http://videos.vporno.tv/videos/mp4/nSwEdcMPi_6EqSf09IJlgg/1515404350/24248.mp4";
// var src = "http://videos.vporno.tv/videos/mp4/V1WWz4ZXJzUrv3CJ-zNPiQ/1515416696/2364.mp4";
// var src = "https://cv.phncdn.com/videos/201710/16/137169582/480P_600K_137169582.mp4?a5dcae8e1adc0bdaed975f0d67fb5e0527c20903c5bb57a6cad7e6cb50bc41fbb1152c24e90ee0008b707eaf83a48c05f097d81bf0ebf7185049728d4fdeb01b1439c1ac9df99bb6ebd84fa7585f640aafb0682c1d3cc5cf9f1ef5889d9b742f3f5e2a2b8c8ddcf754d32cbf8bd573e5df23bec7364a964a3d45c639";
// var src = "https://dv.phncdn.com/videos/201710/07/135903882/480P_600K_135903882.mp4?ttl=1515423250&ri=1843200&rs=672&hash=f78ada254205c0232acb0c3ac7568e0e";
var src = "https://cv.phncdn.com/videos/201601/27/67165581/480P_600K_67165581.mp4?a5dcae8e1adc0bdaed975f0d61fb5e05756dc4acc488d2f9e61ef33953093512602c6cb1feb47dcaf66040f1cf342df544db678aba8f3f73bf1f5cddeccbdecaa03da629bd9a2cb2edc54c3433ae34fb5853a65ffb5b81c8e475af81d659ce2dedb851ec4718ce0d019ca96beb96c0a169782cd6c5d20a29784b";
// ---------------------------------------------
// console.time("screen-1");
// ffmpeg(src)
// .videoBitrate('800k')
// .on('filenames', function(filenames) {
//     console.log(' - Will generate ' + filenames.join(', ') + ' into tempfiles.')
// })
// .on('end', function() {
//     console.log('Screenshots successfully taken');
// })
// .on('error', function(err, stdout, stderr) {
// console.log("ffmpeg stdout:\n" + stdout);
// console.log("ffmpeg stderr:\n" + stderr);
// })
// .screenshots({
//     filename: 'screenshot1',
//     // timestamps: [30.5, '50%', '00:50.123'],
//     timemarks: [30.5],
//     // count: 5,
//     size: '320x240',
//     folder: './'
// });
// console.timeEnd("screen-1");
// ---------------------------------------------
// console.time("screen-2");
// ffmpeg(src)
// .videoBitrate('800k')
// .on('filenames', function(filenames) {
//     console.log(' - Will generate ' + filenames.join(', ') + ' into tempfiles.')
// })
// .on('end', function() {
//     console.log('Screenshots successfully taken');
// })
// .on('error', function(err, stdout, stderr) {
// console.log("ffmpeg stdout:\n" + stdout);
// console.log("ffmpeg stderr:\n" + stderr);
// })
// .screenshots({
//     filename: 'screenshot2',
//     timemarks: ['50%'],
//     size: '320x240',
//     folder: './'
// });
// console.timeEnd("screen-2");
// ---------------------------------------------
console.time("screen-3");
ffmpeg(src)
.videoBitrate('800k')
.on('codecData', function(data) {
	console.log('Input duration is [' + data.duration + '] with ' + data.video + ' video');
})
.on('filenames', function(filenames) {
    console.log(' - Will generate ' + filenames.join(', ') + ' into tempfiles.')
})
.on('end', function() {
    console.log('Screenshots successfully taken');
	console.timeEnd("screen-3");
})
.on('error', function(err, stdout, stderr) {
console.log("ffmpeg stdout:\n" + stdout);
console.log("ffmpeg stderr:\n" + stderr);
})
.screenshots({
    filename: 'screenshot3',
    timemarks: ['20:50.123'],
    size: '320x240',
    folder: './'
});
// console.log("Measuring Execution Times: " + (new Date().getTime() - timer));