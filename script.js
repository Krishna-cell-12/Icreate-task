        const problems = {
            'two-sum': {
                title: 'Two Sum',
                difficulty: 'Easy',
                description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
                examples: [
                    {
                        input: 'nums = [2,7,11,15], target = 9',
                        output: '[0,1]',
                        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
                    }
                ],
                starterCode: `function twoSum(nums, target) {
    // Write your solution here
    
}`
            },
            'palindrome': {
                title: 'Valid Palindrome',
                difficulty: 'Easy',
                description: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.',
                examples: [
                    {
                        input: 's = "A man, a plan, a canal: Panama"',
                        output: 'true',
                        explanation: '"amanaplanacanalpanama" is a palindrome.'
                    }
                ],
                starterCode: `function isPalindrome(s) {
    // Write your solution here
    
}`
            },
            'reverse-string': {
                title: 'Reverse String',
                difficulty: 'Easy',
                description: 'Write a function that reverses a string. The input string is given as an array of characters s.',
                examples: [
                    {
                        input: 's = ["h","e","l","l","o"]',
                        output: '["o","l","l","e","h"]',
                        explanation: 'The string is reversed in-place.'
                    }
                ],
                starterCode: `function reverseString(s) {
    // Write your solution here
    
}`
            },
            'longest-substring': {
                title: 'Longest Substring Without Repeating Characters',
                difficulty: 'Medium',
                description: 'Given a string s, find the length of the longest substring without repeating characters.',
                examples: [
                    {
                        input: 's = "abcabcbb"',
                        output: '3',
                        explanation: 'The answer is "abc", with the length of 3.'
                    }
                ],
                starterCode: `function lengthOfLongestSubstring(s) {
    // Write your solution here
    
}`
            },
            'group-anagrams': {
                title: 'Group Anagrams',
                difficulty: 'Medium',
                description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
                examples: [
                    {
                        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
                        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
                        explanation: 'Group anagrams together based on sorted characters.'
                    }
                ],
                starterCode: `function groupAnagrams(strs) {
    // Write your solution here
    
}`
            },
            'product-except-self': {
                title: 'Product of Array Except Self',
                difficulty: 'Medium',
                description: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].',
                examples: [
                    {
                        input: 'nums = [1,2,3,4]',
                        output: '[24,12,8,6]',
                        explanation: 'Product of all elements except self at each position.'
                    }
                ],
                starterCode: `function productExceptSelf(nums) {
    // Write your solution here
    
}`
            },
            'median-sorted-arrays': {
                title: 'Median of Two Sorted Arrays',
                difficulty: 'Hard',
                description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
                examples: [
                    {
                        input: 'nums1 = [1,3], nums2 = [2]',
                        output: '2.00000',
                        explanation: 'merged array = [1,2,3] and median is 2.'
                    }
                ],
                starterCode: `function findMedianSortedArrays(nums1, nums2) {
    // Write your solution here
    
}`
            },
            'trapping-rain-water': {
                title: 'Trapping Rain Water',
                difficulty: 'Hard',
                description: 'Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
                examples: [
                    {
                        input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]',
                        output: '6',
                        explanation: 'The above elevation map can trap 6 units of rain water.'
                    }
                ],
                starterCode: `function trap(height) {
    // Write your solution here
    
}`
            },
            'word-ladder': {
                title: 'Word Ladder',
                difficulty: 'Hard',
                description: 'A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that every adjacent pair of words differs by a single letter.',
                examples: [
                    {
                        input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]',
                        output: '5',
                        explanation: 'One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 words long.'
                    }
                ],
                starterCode: `function ladderLength(beginWord, endWord, wordList) {
    // Write your solution here
    
}`
            }
        };

        let currentProblem = null;

        const tabs = document.querySelectorAll('.tab');
        const problemsLists = document.querySelectorAll('.problems-list');
        const problemItems = document.querySelectorAll('.problem-item');
        const codingArea = document.querySelector('.coding-area');
        function init() {
            setupEventListeners();
        }

        function setupEventListeners() {
            tabs.forEach(tab => {
                tab.addEventListener('click', () => switchTab(tab.dataset.difficulty));
            });

            problemItems.forEach(item => {
                item.addEventListener('click', () => selectProblem(item.dataset.problem));
            });
        }

        function switchTab(difficulty) {
            tabs.forEach(tab => tab.classList.remove('active'));
            document.querySelector(`[data-difficulty="${difficulty}"].tab`).classList.add('active');

            problemsLists.forEach(list => {
                list.classList.remove('active');
            });
            document.querySelector(`[data-difficulty="${difficulty}"].problems-list`).classList.add('active');
        }

        function selectProblem(problemId) {
            problemItems.forEach(item => item.classList.remove('selected'));
            document.querySelector(`[data-problem="${problemId}"]`).classList.add('selected');

            currentProblem = problemId;
            loadProblem(problems[problemId]);
        }

        function loadProblem(problem) {
            const codingAreaHTML = `
                <div class="problem-header">
                    <h2>${problem.title}</h2>
                    <p class="problem-description">${problem.description}</p>
                    <div class="problem-examples">
                        ${problem.examples.map(example => `
                            <div class="example">
                                <div class="example-label">Example:</div>
                                <div class="example-code">Input: ${example.input}</div>
                                <div class="example-code" style="margin-top: 5px;">Output: ${example.output}</div>
                                ${example.explanation ? `<div style="margin-top: 5px; color: #6b7280; font-size: 0.9rem;">${example.explanation}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="editor-container">
                    <div class="editor-header">
                        <div class="editor-title">Solution</div>
                        <div class="editor-actions">
                            <button class="btn btn-secondary" onclick="resetCode()">Reset</button>
                            <button class="btn btn-primary" onclick="runCode()">Run Code</button>
                        </div>
                    </div>
                    <textarea class="code-editor" id="codeEditor" placeholder="Write your solution here...">${problem.starterCode}</textarea>
                    <div class="output-section" id="outputSection">
                        <div class="output-header">Output:</div>
                        <div class="output-content" id="outputContent"></div>
                    </div>
                </div>
            `;

            codingArea.innerHTML = codingAreaHTML;
        }

        function resetCode() {
            if (currentProblem) {
                document.getElementById('codeEditor').value = problems[currentProblem].starterCode;
                document.getElementById('outputSection').classList.remove('show');
            }
        }

        function runCode() {
            const code = document.getElementById('codeEditor').value;
            const outputSection = document.getElementById('outputSection');
            const outputContent = document.getElementById('outputContent');

            if (!code.trim()) {
                outputContent.textContent = 'Please write some code first!';
                outputSection.classList.add('show');
                return;
            }

            outputContent.innerHTML = '<div class="loading"></div> Running code...';
            outputSection.classList.add('show');

            setTimeout(() => {
                try {
                    let result = 'Code executed successfully!\n\n';
                    result += 'Note: This is a demo platform. In a real implementation,\n';
                    result += 'your code would be executed in a secure sandbox environment\n';
                    result += 'with proper test cases and validation.';
                    
                    outputContent.textContent = result;
                } catch (error) {
                    outputContent.textContent = `Error: ${error.message}`;
                }
            }, 1500);
        }

        init();
