<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <title>Multiplayer Web Game</title>
    <script type="text/javascript" src="assets/js/jquery-1.12.0.min.js"></script>
    <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vue"></script>
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <br/>
            </div>
            <div class="col-md-12">

                <div class="row">
                    <div class="col-md-9">
                        <h4> Welcome to <strong> Multiplayer Web Game </strong></h4>
                        <small>Play my game hope you enjoy version 0.0.1</small>
                    </div>
                    <div class="col-md-3">
                        <img class="ml-3" src="..." alt="Generic placeholder image">
                    </div>
                </div>
                <br/>
                <div class="btn-group" role="group" aria-label="...">
                    <button class="btn btn-danger" data-toggle="modal" data-target="#createuser">Create a Profile</button>
                    <button type="button" class="btn btn-info">Create a Room</button>
                    <button type="button" class="btn btn-success">Character Cards</button>
                </div>
                <hr>
                <div class="row">
                    <div class="col-md-12">
                        <div class="thumbnail">
                            <div class="body">
                                <div class="col-md-12">
                                    <div class="row text-center" id="menu">
                                        <div class="col-md-3">
                                            <h5>Battle with Other Players</h5>
                                        </div>
                                        <div class="col-md-3">
                                            <h5>Random Game Enter</h5>
                                        </div>
                                        <div class="col-md-3">
                                            <h5>Scavenger Hunt</h5>
                                        </div>
                                        <div class="col-md-3">
                                            <h5>Adventure!</h5>
                                        </div>
                                    </div>
                                    <div class="row text-center" id="register" style="display:none">

                                    </div>
                                    <div class="row text-center" id="login" style="display:none">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include "assets/parts/modals.php" ?>
    </div>
</body>
</html>