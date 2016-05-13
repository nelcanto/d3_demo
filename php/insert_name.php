<?php  
 $q = ($_GET['q']);

$con = mysqli_connect('localhost','root','iweb','d3_demo');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="INSERT INTO `ft` (`name`,`property`) VALUES ('$q',1000)";
$result = mysqli_query($con,$sql);

/*echo "<table>
<tr>
<th>id</th>
<th>name</th>
<th>property</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['property'] . "</td>";
    echo "</tr>";
}
echo "</table>";*/
mysqli_close($con);
?>