alert("connected");

var record = document.querySelector("#record");


record.addEventListener("click", function(){
	let token = "4ebNmTv%2BjyFZ1b482KoZw1MZ0MwJzS65r0sIvZHOOT4Cs7KgwmPstCvpoNdZol3o5U5fWCFw3RvfzacYWqucbtSkg6pgbBrQTWTbDwlKyXbEy7XEbrsIfBVjjijn0vxqzmnt32eZgdsQTvl%2FhGY45dmwiebAV4u4OvnMp%2FfwwUc18qe4SvFpzmhtroVMBDhYLRouWBjHiFchiVOAdBJo%2FmHWqcn7uuCDkBe0332SVGui1MYqgAZkh6DVWzSfWdQd2TlC3sYeCCc3f2E7xs9UdQo9OzJClN8bJuPJJDwi7xam2Nb3LlwnIL%2BBdtdheK4T%2FXfBKKLw6F%2B8xqRnru%2FOkjiF4kDnlRdXupXinnIgQ1kWD%2Bmg%2F4pJzof2%2Bw1Jh%2FR%2FIuIVES2b7v3JixHNwTrOcZ7BNyvhuxAE9Q0NYVnaDq36AEFQOhTBCzNjK0BQxUNgp%2BIV3IdfUDW%2FXpEIZCBMxEY4W4NGbJHksJIx3qr4d2Jcs2s8lb26C%2FQC%2Bso9%2BNky%2BsEUdMhPA9ZNW%2F7ciQFkf2ZONvhHX956Ygy1kaE1UzEhtsXALhjXTDhfDH8epxbxUq9sFj%2FRrZ9Cgpew2oB700nO42X8aMpG1GO6uTRbkvHb%2B8UllP04vukNaOWVj1wktIDRuKpsUzpzXcQ0ttYl0sGk%2B8PurAGcy1qZArdRWomjaUP%2F%2FA1v4szT%2FUG48kUPgFOIGAuMTVjT7iW4SLYd2fJeHRtnHE3kFJ742LP%2Bi0A4jDOntmJ4nhKqSbRULy4jOPoXoaKKVbMJKyTHFvdA%2FXSXZlK%2F2tOpS0976ox6OUalbKbk9abZVqZEo1vP790hCi8oekpQpURT9j6vFRca25TwN1McqneIF6g6PqdKLfbslU%2Bb8QQgw1TOinp%2FtOPYvhSbCOx8YqQhwR%2BX%2FIMh4Ox9nT2CmVyZc977bnKDrmlWcfmOSDdnISwY%2B9gjnOsll5J30PoXstrRR8ya2fBeQEmdIikVn4K4j%2Foc7jedT14%3D";
	let stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
		token: token,
		outputElement: "#output"
	});

	stream.on("error", err => {
      console.log(err);
		});
	var stop = document.querySelector("#stop");

	record.addEventListener("click", function(){
          stream.stop();
      })


})
