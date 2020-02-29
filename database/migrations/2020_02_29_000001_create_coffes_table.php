<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoffesTable extends Migration
{
    public function up()
    {
        Schema::create('coffee', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title',255);
            $table->string('detail',1000);
            $table->string('path_img',255);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('coffee');
    }
}
