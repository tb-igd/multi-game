<div class="modal fade" id="createuser" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Create an avatar.</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="col-md-12">
                    <div class="row">
                        <br/>
                        <div class="col-md-1">

                        </div>
                        <div class="col-md-10">
                            <small class="modal-title">You can create your own character on this world. You can be unique or you may see a doppelganger.</small>
                            <form method="POST" id="createown">
                                <div class="form-group">
                                    <label for="username">Username / Email</label>
                                    <input type="text" class="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="Enter username or email">
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" name="password" placeholder="Enter Password">
                                </div>
                                <div class="form-group">
                                    <label for="confpassword">Confirm Password</label>
                                    <input type="password" class="form-control" id="confpassword" aria-describedby="emailHelp" placeholder="Enter your character's name">
                                    <small class="form-text text-danger" id="password_check" style="display:none">Passwords do not match, my friend.</small>
                                </div>
                                <div class="form-group">
                                    <label for="nickname">Nickname</label>
                                    <input type="text" class="form-control" name="nickname" id="nickname" aria-describedby="emailHelp" placeholder="Enter your character's name">
                                    <small id="emailHelp" class="form-text text-muted">This name will appear as your display name</small>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <div class="form-check">
                                                <input class="form-check-input" name="gender" type="radio" value="" id="defaultCheck1">
                                                <label class="form-check-label" for="defaultCheck1">
                                                    Male
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" name="gender" type="radio" value="" id="defaultCheck2">
                                                <label class="form-check-label" for="defaultCheck2">
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                                <button type="submit" class="btn btn-primary" id="btnSub">Create Your Own Game Character</button>
                                <small id="emailHelp" class="form-text text-muted">You can customize profile avatar later after you create a game character.</small>
                                <small class="form-text text-success" id="createsuccess" style="display:none">Own character creation successfull and has been completed!</small>
                                <small class="form-text text-warning" id="createfail" style="display:none">Own character creation has failed, there may be error in the system.</small>
                            </form>
                        </div>
                        <div class="col-md-1">

                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
