<?php

if (isset($_POST['submit'])) {
    $to            = 'ana8@icloud.com';
    $subject       = 'Reserve Table';
    $name          = (string)$_POST['name'];
    $number        = (string)$_POST['number'];
    $window_answer = (bool)$_POST['window'] ? 'yes' : 'no';
    $bar_answer    = (bool)$_POST['bar'] ? 'yes' : 'no';
    $any_answer    = (bool)$_POST['any'] ? 'yes' : 'no';

    $message  = $name . ' want to reserve a table. Phone is ' . $phone;
    $message .= 'window: ' . $window_answer;
    $message .= 'bar: ' . $bar_answer;
    $message .= 'any: ' . $any_answer;

    mail($to, $subject, $message);
} else {
    http_response_code(400);
}


    