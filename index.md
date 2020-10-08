<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>inlämningsuppgift 1</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <form class="container">
        <h1>Aggresiv undersökning</h1>
        <p style="font-weight: 700;">MATA IN DITT NAMN</p>
        <span><input size="35" maxlength="20"></span>
        <label>SKRIV LITE TEXT OM DIG SJÄLV!</label>
        <span><textarea style="overflow: hidden; resize: none; background-color: lightgreen;" rows="4" cols="30"></textarea></span>
        <i>SPELAR DU NÅGON SPORT?!</i>
        <div class="rowContainer">
            <input type="radio" name="sport" value="JA">
            <label>JA</label>
            <input type="radio" name="sport" value="NEJ">2
            <label>NEJ</label>
        </div>
        <i><b>HUR FÖREDRAR DU ATT LÄSA OM INTRESSANTA SAKER?!!</b></i>
        <div class="rowContainer">
            <input type="checkbox" value="Böcker">
            <label>Böcker</label>
            <input type="checkbox" value="Tidningar">
            <label>Tidningar</label>
            <input type="checkbox" value="Online">
            <label>Online</label>
        </div>
        <div class="rowContainerS">
            <p>VÄLJ EN FAVORITGENRE ELLER INTE VÄLJ</p>
            <select name="genres">
                <option></option>
                <option value="Action">Action</option>
                <option value="Romantik">Romantik</option>
                <option value="Komedi">Komedi</option>
                <option value="Drama">Drama</option>
                <option value="Skräck">Skräck</option>
            </select>
        </div>
        <button><a href="http://google.com">Lämna in</a></button>
    </form>
    <script src="" async defer></script>
</body>

</html>