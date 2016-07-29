function ExtractEmails(arg) {
    var input, email, result;
    input = arg[0];
    emails = input.match(/((([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,})))/gi);
    result = emails.toString().replace(/,/gi, '\n');
    console.log('Emails:\n' + result);
}

ExtractEmails(['test1@test.test alalalala test2@test2.test some text alalalala test3@test3.test test4@test4..test lalala test5@@test5.test']);
