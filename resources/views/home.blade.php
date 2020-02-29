{{-- @extends('layouts.app')

@section('content')
<div class="container">
    <div id="app">
        <router-view></router-view>
    </div>
</div>
@endsection --}}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="{{ asset('css/sidebar.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ asset('admin/fonts/font-awesome-4.7.0/css/font-awesome.min.css') }}">
</head>

<body>
    <div id="app">
        <router-view></router-view>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
