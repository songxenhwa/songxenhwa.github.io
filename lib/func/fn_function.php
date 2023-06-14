<?php 
	function compressJs($buffer)
    {
        // Removes multi-line comments
        // $buffer = preg_replace('/\/\*([^\*][^\/]){2}\*\//is', PHP_EOL, $buffer);
        // Remove left white space
        $buffer = preg_replace('/(^\s+)/m', '', $buffer);
        // Remove space after colons
        $buffer = str_replace(': ', ':', $buffer);
        // Remove space before equal signs
        $buffer = str_replace(' =', '=', $buffer);
        // Remove space after equal signs
        $buffer = str_replace('= ', '=', $buffer);
        // Remove whitespace
        $buffer = str_replace(array('    ', '    '), '', $buffer);
        // $buffer = str_replace(array('\t', '  ', '    ', '    '), '', $buffer);
        // $buffer = str_replace(array("\r\n\r\n", "\n\n", "\r\r", '\t', '  ', '    ', '    '), '', $buffer);

        // minify
        // $buffer =JSMin::minify($buffer);
        return $buffer.'
		';
    }
?>