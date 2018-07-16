<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    @stack('top-resource')

    <script type="text/javascript">
        window.vuebnb_server_data  = "{!! addslashes(json_encode($data)) !!}";
    </script>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ mix('css/component-style.css') }}" type="text/css">
    <link rel="stylesheet" href="{{ mix('css/vendors.css') }}" type="text/css">
</head>
<body>
    <div id="app"></div>
</body>

</html>
