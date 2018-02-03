<?php


$redis = new Redis();

$redis->connect('127.0.0.1', 6379);

$redis->delete('h');
$redis->hSet('h', '1', 'Hola Mundo'); /* 1, 'key1' => 'hello' in the hash at "h" */
echo $redis->hGet('h', '1'); /* returns "hello" */

$count = $redis->dbSize();
echo "Redis has $count keys\n";

?>